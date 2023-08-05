const fs = require('fs');
const path = require('path');

const importedFiles = [];

function convertSvgToJs(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.svg');
  
  const jsContent = `const ${fileName} = \`${fileContent}\`;\nmodule.exports = ${fileName};`;
  const newFilePath = filePath.replace('.svg', '.js');
  
  fs.writeFileSync(newFilePath, jsContent, 'utf-8');
  fs.unlinkSync(filePath); // Remove the original SVG file
  
  importedFiles.push({
    fileName,
    relativePath: path.relative(process.cwd(), newFilePath)
  });
}

function convertFolderContents(folderPath) {
  const files = fs.readdirSync(folderPath);
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      convertFolderContents(filePath); // Recurse into subfolder
    } else if (path.extname(filePath) === '.svg') {
      convertSvgToJs(filePath);
    }
  });
}

const targetFolder = './parts'; // Update with your folder's path
convertFolderContents(targetFolder);

console.log("Imported files:");
importedFiles.forEach(file => {
  console.log(`const ${file.fileName} = require('./${file.relativePath}');`);
});
