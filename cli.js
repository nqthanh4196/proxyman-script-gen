#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const appPath = path.join(__dirname, 'node_modules', '.bin', 'electron');
const projectPath = __dirname;

const args = [projectPath, '--no-sandbox'].concat(process.argv.slice(2));

const child = spawn(appPath, args, {
  stdio: 'inherit',
  cwd: projectPath
});

child.on('error', (err) => {
  console.error('Failed to start Electron:', err.message);
  process.exit(1);
});
