
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/curriculum-database.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Split by lines
const lines = content.split('\n');

// Find the start of the inline CS definition
const startIndex = lines.findIndex(line => line.includes('export const year10ComputerScienceJ277: Subject = {'));

if (startIndex === -1) {
    console.error('Could not find start of CS definition');
    process.exit(1);
}

// Keep everything before the inline definition (minus the comment line above it if exists)
const keptLines = lines.slice(0, startIndex - 1);

// Add the import at the top
keptLines.splice(0, 0, 'import { year10ComputerScienceJ277 } from "./computer-science-data";');

// Add the new export block at the end
const newExport = `
// Database of all subjects by year group
export const curriculumDatabase: Record<number, Subject[]> = {
  7: [year7Mathematics],
  10: [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History, year10ComputerScienceJ277],
}

// Function to get subjects for a year group
export function getSubjectsForYear(yearGroup: number): Subject[] {
  return curriculumDatabase[yearGroup] || []
}

// Function to get a specific subject
export function getSubject(subjectId: string, yearGroup: number): Subject | undefined {
  const subjects = getSubjectsForYear(yearGroup)
  return subjects.find((subject) => subject.id === subjectId)
}

// Function to get a specific topic
export function getTopic(subjectId: string, topicId: string, yearGroup: number): Topic | undefined {
  const subject = getSubject(subjectId, yearGroup)
  return subject?.topics.find((topic) => topic.id === topicId)
}
`;

const finalContent = keptLines.join('\n') + newExport;

fs.writeFileSync(filePath, finalContent);
console.log('Successfully migrated curriculum-database.ts');
