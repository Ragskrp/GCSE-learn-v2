
import { Subject, Topic, StudyMaterial, Quiz, QuizQuestion } from "@/types/curriculum";

// Import Subject Data
import { year10Mathematics } from "./maths-data";
import { year10CombinedScience } from "./science-data";
import { year10EnglishLiterature } from "./english-data";
import { year10History } from "./history-data";
import { year10ComputerScienceJ277 } from "./computer-science-data";

// Re-export types for use in other files
export type { Subject, Topic, StudyMaterial, Quiz, QuizQuestion };

// Mock Year 7 Data (Placeholder)
const year7Mathematics: Subject = {
  id: "maths-7",
  name: "Mathematics (Year 7)",
  duration: 60,
  questions: 10,
  color: "from-blue-400 to-indigo-600",
  icon: "📐",
  level: 1,
  xp: 0,
  maxXp: 1000,
  coins: 0,
  unlocked: true,
  conquestTitle: "Number Novice",
  timeLimit: 60,
  topics: []
};

// Database of all subjects by year group
export const curriculumDatabase: Record<number, Subject[]> = {
  7: [year7Mathematics],
  10: [
    year10Mathematics,
    year10CombinedScience,
    year10EnglishLiterature,
    year10History,
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
