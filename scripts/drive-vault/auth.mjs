// ============================================================
// Google Drive OAuth2 Authentication
// Handles first-time consent flow + token storage for reuse
// ============================================================

import { google } from 'googleapis';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { createServer } from 'http';
import { URL } from 'url';
import open from 'open';

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = new URL('./token.json', import.meta.url);
const CREDENTIALS_PATH = new URL('./credentials.json', import.meta.url);

/**
 * Load or create OAuth2 credentials.
 * First run opens browser for consent.
 * Subsequent runs use stored token.
 */
export async function authorize() {
  // Load client credentials
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('\n  Missing credentials.json in scripts/drive-vault/');
    console.error('  Download OAuth Client ID JSON from Google Cloud Console:');
    console.error('  https://console.cloud.google.com/apis/credentials\n');
    console.error('  Steps:');
    console.error('  1. Create project (or use existing)');
    console.error('  2. Enable "Google Drive API"');
    console.error('  3. Create OAuth 2.0 Client ID (Desktop App)');
    console.error('  4. Download JSON, rename to credentials.json');
    console.error('  5. Place in scripts/drive-vault/\n');
    process.exit(1);
  }

  const raw = await readFile(CREDENTIALS_PATH, 'utf-8');
  const credentials = JSON.parse(raw);
  const { client_id, client_secret } = credentials.installed || credentials.web;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    'http://localhost:3199/oauth2callback'
  );

  // Check for stored token
  if (existsSync(TOKEN_PATH)) {
    const token = JSON.parse(await readFile(TOKEN_PATH, 'utf-8'));
    oauth2Client.setCredentials(token);

    // Refresh if expired
    if (token.expiry_date && token.expiry_date < Date.now()) {
      console.log('  Refreshing expired token...');
      const { credentials: refreshed } = await oauth2Client.refreshAccessToken();
      oauth2Client.setCredentials(refreshed);
      await writeFile(TOKEN_PATH, JSON.stringify(refreshed, null, 2));
    }

    return oauth2Client;
  }

  // First-time: open browser for consent
  return await getNewToken(oauth2Client);
}

/**
 * Opens browser, starts local server, captures OAuth callback
 */
async function getNewToken(oauth2Client) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });

  console.log('\n  Opening browser for Google authorization...');
  console.log('  If it doesn\'t open, visit this URL:\n');
  console.log(`  ${authUrl}\n`);

  // Try to open browser (falls back gracefully)
  try {
    await open(authUrl);
  } catch {
    // Manual open is fine
  }

  // Start local server to catch the callback
  return new Promise((resolve, reject) => {
    const server = createServer(async (req, res) => {
      try {
        const url = new URL(req.url, 'http://localhost:3199');
        if (url.pathname !== '/oauth2callback') return;

        const code = url.searchParams.get('code');
        if (!code) throw new Error('No authorization code received');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h2>Authorized! You can close this tab.</h2></body></html>');

        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        await writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2));

        console.log('  Token saved. You won\'t need to authorize again.\n');
        server.close();
        resolve(oauth2Client);
      } catch (err) {
        res.writeHead(400);
        res.end('Authorization failed');
        server.close();
        reject(err);
      }
    });

    server.listen(3199, () => {
      console.log('  Listening for OAuth callback on port 3199...');
    });
  });
}
