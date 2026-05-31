import { Subject, Topic, StudyMaterial, Quiz, QuizQuestion } from "@/types/curriculum";

// Import Subject Data
// Import Subject Data
export { year10Mathematics } from "./maths-data";
export { year10CombinedScience } from "./science-data";
export { year10EnglishLiterature } from "./english-data";
export { year10EnglishLanguage } from "./english-language-data";
export { year10Business } from "./business-data";
export { year10French } from "./french-data";
export { year10ReligiousStudies } from "./re-data";
export { year10ComputerScienceJ277 } from "./computer-science-data";

export { year7Mathematics } from "./maths-data-ks3";
export { year7Science } from "./science-data-ks3";
export { year7English } from "./english-data-ks3";

import { year10Mathematics } from "./maths-data";
import { year10CombinedScience } from "./science-data";
import { year10EnglishLiterature } from "./english-data";
import { year10EnglishLanguage } from "./english-language-data";
import { year10Business } from "./business-data";
import { year10French } from "./french-data";
import { year10ReligiousStudies } from "./re-data";
import { year10ComputerScienceJ277 } from "./computer-science-data";

import { year7Mathematics } from "./maths-data-ks3";
import { year7Science } from "./science-data-ks3";
import { year7English } from "./english-data-ks3";

// Re-export types for use in other files
export type { Subject, Topic, StudyMaterial, Quiz, QuizQuestion };

// Database of all subjects by year group
export const curriculumDatabase: Record<number, Subject[]> = {
  7: [year7Mathematics, year7Science, year7English],
  10: [
    year10Business,
    year10French,
    year10EnglishLiterature,
    year10EnglishLanguage,
    year10CombinedScience,
    year10ReligiousStudies,
    year10Mathematics,
    year10ComputerScienceJ277
  ],
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
