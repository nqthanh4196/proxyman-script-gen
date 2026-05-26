#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Find electron binary
function findElectron() {
  // 1. Check local node_modules (for development)
  const localElectron = path.join(__dirname, 'node_modules', '.bin', 'electron');
  if (fs.existsSync(localElectron)) return localElectron;

  // 2. Check global node_modules
  const npmRoot = process.env.NODE_PATH || '/opt/homebrew/lib/node_modules';
  const globalElectron = path.join(npmRoot, 'proxyman-script-gen', 'node_modules', '.bin', 'electron');
  if (fs.existsSync(globalElectron)) return globalElectron;

  // 3. Try resolving from global
  try {
    const resolved = require.resolve('electron', { paths: [__dirname] });
    if (resolved) return path.join(path.dirname(resolved), '.bin', 'electron');
  } catch (e) {}

  return 'electron'; // fallback to PATH
}

const projectPath = __dirname;
const electronPath = findElectron();
const args = [projectPath, '--no-sandbox'].concat(process.argv.slice(2));

const child = spawn(electronPath, args, {
  stdio: 'inherit',
  detached: true,
  cwd: projectPath
});

child.on('error', (err) => {
  console.error('Failed to start Electron:', err.message);
  process.exit(1);
});
