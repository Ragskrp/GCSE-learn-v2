const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../data/maths-data.ts');
const outputPath = path.join(__dirname, '../data/maths-data.js');

try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Remove imports
    content = content.replace(/import .* from .*/g, '');

    // Remove type annotation ': Subject'
    content = content.replace(/: Subject/g, '');

    // Change 'export const' to 'module.exports ='
    content = content.replace(/export const year10Mathematics/, 'const year10Mathematics');
    content += '\nmodule.exports = { year10Mathematics };';

    fs.writeFileSync(outputPath, content);
    console.log('Successfully converted maths-data.ts to maths-data.js');
} catch (error) {
    console.error('Error converting file:', error);
}
