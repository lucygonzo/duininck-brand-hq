#!/usr/bin/env node
// ============================================================
// Drive Vault Updater
// Finds existing files in Drive by name and updates their content.
// Reads from local research-output/ files and pushes to Drive.
//
// Usage:
//   npm run update-vault
//   npm run update-vault -- --file "company-profile.md"
//   npm run update-vault -- --dry-run
// ============================================================

import { google } from 'googleapis';
import { readFile, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename } from 'path';
import { authorize } from './auth.mjs';
import { VAULT_ROOT } from './config.mjs';

const DRY_RUN = process.argv.includes('--dry-run');
const SINGLE_FILE = process.argv.find((a, i) => process.argv[i - 1] === '--file');
const RESEARCH_DIR = new URL('../../research-output/', import.meta.url).pathname;

async function main() {
  console.log('\n  ╔══════════════════════════════════════════╗');
  console.log('  ║   Drive Vault Updater                    ║');
  console.log('  ╚══════════════════════════════════════════╝\n');

  // Check for local research output files
  if (!existsSync(RESEARCH_DIR)) {
    console.error(`  No research-output/ directory found at ${RESEARCH_DIR}`);
    console.error('  Create research output files first.\n');
    process.exit(1);
  }

  // Get list of local research files to push
  const localFiles = await getLocalFiles(RESEARCH_DIR);
  if (localFiles.length === 0) {
    console.error('  No .md files found in research-output/');
    process.exit(1);
  }

  console.log(`  Found ${localFiles.length} local research files to push.\n`);

  if (DRY_RUN) {
    console.log('  [DRY RUN] Files that would be updated:\n');
    for (const f of localFiles) {
      console.log(`    ${f.relativePath}`);
    }
    console.log('\n  Run without --dry-run to push to Drive.\n');
    return;
  }

  // Authenticate
  console.log('  Authenticating...');
  const auth = await authorize();
  const drive = google.drive({ version: 'v3', auth });

  // Find the root vault folder
  console.log(`  Finding "${VAULT_ROOT}" folder in Drive...`);
  const rootId = await findFolder(drive, VAULT_ROOT, null);
  if (!rootId) {
    console.error(`  Could not find "${VAULT_ROOT}" folder in Drive. Run create-vault first.`);
    process.exit(1);
  }
  console.log(`  Found root folder (ID: ${rootId})\n`);

  // Update each file
  let updated = 0;
  let skipped = 0;

  for (const localFile of localFiles) {
    const fileName = basename(localFile.relativePath);
    const folderPath = localFile.relativePath.replace(`/${fileName}`, '').replace(fileName, '');

    // Navigate folder path to find parent folder ID
    let parentId = rootId;
    if (folderPath) {
      const parts = folderPath.split('/').filter(Boolean);
      for (const part of parts) {
        const folderId = await findFolder(drive, part, parentId);
        if (!folderId) {
          console.log(`    SKIP: Folder not found in Drive: ${folderPath}`);
          skipped++;
          parentId = null;
          break;
        }
        parentId = folderId;
      }
    }

    if (!parentId) continue;

    // Find the file in Drive
    const content = await readFile(localFile.fullPath, 'utf-8');
    const fileId = await findFile(drive, fileName, parentId);
    if (!fileId) {
      // Create new file if not found
      await createFile(drive, fileName, content, parentId);
      console.log(`    CREATED: ${localFile.relativePath}`);
      updated++;
      continue;
    }

    // Update existing file
    await updateFile(drive, fileId, content);
    console.log(`    UPDATED: ${localFile.relativePath}`);
    updated++;
  }

  console.log(`\n  Done! ${updated} files updated, ${skipped} skipped.\n`);
}

async function getLocalFiles(dir, base = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const relativePath = base ? `${base}/${entry.name}` : entry.name;
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await getLocalFiles(fullPath, relativePath);
      files = files.concat(subFiles);
    } else if (entry.name.endsWith('.md')) {
      if (SINGLE_FILE && entry.name !== SINGLE_FILE) continue;
      files.push({ relativePath, fullPath });
    }
  }

  return files;
}

async function findFolder(drive, name, parentId) {
  let q = `name = '${name}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
  if (parentId) q += ` and '${parentId}' in parents`;

  const res = await drive.files.list({ q, fields: 'files(id, name)', pageSize: 1 });
  return res.data.files?.[0]?.id || null;
}

async function findFile(drive, name, parentId) {
  let q = `name = '${name}' and trashed = false`;
  if (parentId) q += ` and '${parentId}' in parents`;

  const res = await drive.files.list({ q, fields: 'files(id, name)', pageSize: 1 });
  return res.data.files?.[0]?.id || null;
}

async function updateFile(drive, fileId, content) {
  await drive.files.update({
    fileId,
    media: {
      mimeType: 'text/markdown',
      body: content,
    },
  });
}

async function createFile(drive, name, content, parentId) {
  await drive.files.create({
    resource: {
      name,
      parents: [parentId],
    },
    media: {
      mimeType: 'text/markdown',
      body: content,
    },
    fields: 'id',
  });
}

main().catch(err => {
  console.error('\n  Error:', err.message);
  process.exit(1);
});
