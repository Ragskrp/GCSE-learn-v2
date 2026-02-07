const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../data/science-data.ts');
const outputPath = path.join(__dirname, '../data/science-data.js');

try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Remove imports
    content = content.replace(/import .* from .*/g, '');

    // Remove type annotation ': Subject'
    content = content.replace(/: Subject/g, '');

    // Change 'export const' to 'module.exports ='
    content = content.replace(/export const year10CombinedScience/, 'const year10CombinedScience');
    content += '\nmodule.exports = { year10CombinedScience };';

    fs.writeFileSync(outputPath, content);
    console.log('Successfully converted science-data.ts to science-data.js');
} catch (error) {
    console.error('Error converting file:', error);
}
