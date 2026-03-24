#!/usr/bin/env node
// ============================================================
// Drive Vault Creator
// Creates the full Google Drive folder structure with
// pre-populated markdown research files.
//
// Usage:
//   npm run create-vault
//   node scripts/drive-vault/index.mjs
//   node scripts/drive-vault/index.mjs --dry-run
//
// First run opens browser for Google OAuth consent.
// Subsequent runs use stored token.
// ============================================================

import { google } from 'googleapis';
import { authorize } from './auth.mjs';
import { CLIENT, VAULT_ROOT } from './config.mjs';
import { getAllTemplates } from './templates.mjs';

const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose') || process.argv.includes('-v');

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log('\n  ╔══════════════════════════════════════════╗');
  console.log('  ║   Drive Vault Creator                    ║');
  console.log(`  ║   Client: ${CLIENT.name.padEnd(30)}║`);
  console.log('  ╚══════════════════════════════════════════╝\n');

  if (DRY_RUN) {
    console.log('  [DRY RUN] No files will be created in Google Drive.\n');
  }

  // Step 1: Authenticate
  console.log('  Step 1: Authenticating with Google Drive...');
  let drive;
  if (!DRY_RUN) {
    const auth = await authorize();
    drive = google.drive({ version: 'v3', auth });
    console.log('  Authenticated.\n');
  } else {
    console.log('  [DRY RUN] Skipping auth.\n');
  }

  // Step 2: Generate all templates
  console.log('  Step 2: Generating templates...');
  const templates = getAllTemplates(CLIENT);
  const fileCount = Object.keys(templates).length;
  console.log(`  Generated ${fileCount} file templates.\n`);

  // Step 3: Extract folder structure from template paths
  console.log('  Step 3: Building folder structure...');
  const folders = extractFolders(templates);
  console.log(`  ${folders.length} folders to create.\n`);

  if (DRY_RUN) {
    console.log('  [DRY RUN] Folder structure:\n');
    console.log(`  ${VAULT_ROOT}/`);
    for (const folder of folders) {
      const depth = folder.split('/').length;
      const indent = '    '.repeat(depth);
      const name = folder.split('/').pop();
      console.log(`  ${indent}${name}/`);
    }
    console.log(`\n  [DRY RUN] Files to create:\n`);
    for (const path of Object.keys(templates).sort()) {
      console.log(`    ${path}`);
    }
    console.log(`\n  [DRY RUN] Total: ${folders.length} folders + ${fileCount} files`);
    console.log('  Run without --dry-run to create in Google Drive.\n');
    return;
  }

  // Step 4: Create root folder
  console.log(`  Step 4: Creating root folder "${VAULT_ROOT}"...`);
  const rootId = await createFolder(drive, VAULT_ROOT, null);
  console.log(`  Root folder created (ID: ${rootId})\n`);

  // Step 5: Create all subfolders
  console.log('  Step 5: Creating subfolders...');
  const folderIds = { '': rootId };

  for (const folderPath of folders) {
    const parts = folderPath.split('/');
    const name = parts.pop();
    const parentPath = parts.join('/');
    const parentId = folderIds[parentPath] || rootId;

    if (VERBOSE) console.log(`    Creating: ${folderPath}/`);
    const folderId = await createFolder(drive, name, parentId);
    folderIds[folderPath] = folderId;
  }
  console.log(`  ${folders.length} folders created.\n`);

  // Step 6: Create all files
  console.log('  Step 6: Creating markdown files...');
  let created = 0;

  for (const [filePath, content] of Object.entries(templates)) {
    const parts = filePath.split('/');
    const fileName = parts.pop();
    const folderPath = parts.join('/');
    const folderId = folderIds[folderPath] || rootId;

    if (VERBOSE) console.log(`    Creating: ${filePath}`);
    await createFile(drive, fileName, content, folderId);
    created++;

    // Progress indicator
    if (created % 10 === 0) {
      console.log(`    ... ${created}/${fileCount} files created`);
    }
  }
  console.log(`  ${created} files created.\n`);

  // Step 7: Summary
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║   Vault Created Successfully!            ║');
  console.log('  ╚══════════════════════════════════════════╝');
  console.log(`\n  ${folders.length} folders + ${created} files in Google Drive`);
  console.log(`  Root folder: "${VAULT_ROOT}"`);
  console.log('\n  Next steps:');
  console.log('  1. Open Google Drive and find the folder');
  console.log('  2. Share with Nicole (Viewer access)');
  console.log('  3. Begin research in order:');
  console.log('     a. Company Profile (01_Brand_Foundation)');
  console.log('     b. Audience Research (04_Audience_Research)');
  console.log('     c. Competitive Landscape (05_Competitive)');
  console.log('     d. Digital Ecosystem (06_Digital_Ecosystem)');
  console.log('     e. Strategy Development (03, 07, 08)\n');
}

// ============================================================
// Google Drive Helpers
// ============================================================

/**
 * Create a folder in Google Drive
 */
async function createFolder(drive, name, parentId) {
  const fileMetadata = {
    name,
    mimeType: 'application/vnd.google-apps.folder',
  };
  if (parentId) {
    fileMetadata.parents = [parentId];
  }

  const response = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  return response.data.id;
}

/**
 * Create a markdown file in Google Drive (as Google Doc for editability)
 * Falls back to plain text upload if Google Docs conversion fails.
 */
async function createFile(drive, name, content, folderId) {
  // Upload as plain text .md file (preserves markdown formatting)
  const fileMetadata = {
    name,
    parents: [folderId],
  };

  const media = {
    mimeType: 'text/markdown',
    body: content,
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: 'id',
  });

  return response.data.id;
}

/**
 * Extract unique folder paths from template keys
 */
function extractFolders(templates) {
  const folderSet = new Set();

  for (const filePath of Object.keys(templates)) {
    const parts = filePath.split('/');
    parts.pop(); // Remove filename

    // Build all parent paths
    for (let i = 1; i <= parts.length; i++) {
      folderSet.add(parts.slice(0, i).join('/'));
    }
  }

  // Sort so parent folders are created before children
  return [...folderSet].sort();
}

// ============================================================
// RUN
// ============================================================

main().catch(err => {
  console.error('\n  Error:', err.message);
  if (VERBOSE) console.error(err);
  process.exit(1);
});
