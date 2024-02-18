const fs = require('fs');
const path = require('path');

let output = '';
// Extended ignored directories and added common ignore patterns
const ignoredDirs = ['node_modules', '.git', 'build', 'dist', '.next', '__pycache__', '.venv', '.vscode'];
const ignoredExtensions = ['.log', '.tmp', '.swp']; // Add any other file extensions you want to ignore
const ignoredFiles = ['.env', 'package-lock.json', 'yarn.lock']; // Add other specific files you want to ignore

function shouldIgnore(file, stat) {
  // Ignore directories and files specified in the ignored arrays
  if (ignoredDirs.includes(file) || ignoredFiles.includes(file)) {
    return true;
  }

  // Ignore files with specified extensions
  if (stat.isFile() && ignoredExtensions.some(ext => file.endsWith(ext))) {
    return true;
  }

  // Add any other ignore logic here
  return false;
}

function displayFileTree(dir, prefix = '') {
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (!shouldIgnore(file, stat)) {
      const isLast = index === files.length - 1;
      const prefixCurrent = isLast ? '└── ' : '├── ';
      output += prefix + prefixCurrent + file + '\n';

      if (stat.isDirectory()) {
        const newPrefix = isLast ? prefix + '    ' : prefix + '│   ';
        displayFileTree(filePath, newPrefix);
      }
    }
  });
}

displayFileTree('./'); // Replace './' with your directory path if needed
fs.writeFileSync('fileTree.txt', output);