
import { ContentService } from "./content-service";
import { QuizQuestion, Subject } from "@/data/curriculum-database";

export interface MockTest {
    id: string;
    subjectId: string;
    subjectName: string;
    questions: QuizQuestion[];
    timeLimit: number; // in minutes
    totalMarks: number;
    dateGenerated: string;
}

export class MockTestService {
    /**
     * Generates a random mock test for a given subject.
     * It pulls questions from all topics within that subject to simulate a real exam.
     */
    static async generateMockTest(subjectId: string, questionCount: number = 20): Promise<MockTest | null> {
        // 1. Fetch the full subject with all topics and quizzes
        // We use the ID directly, assuming the ContentService handles the fallback logic we just wrote
        const subject = await ContentService.getSubjectById(subjectId);

        if (!subject) {
            console.error(`Subject not found: ${subjectId}`);
            return null;
        }

        // 2. Aggregate ALL questions from all topics
        let allQuestions: QuizQuestion[] = [];

        subject.topics.forEach(topic => {
            if (topic.quizzes) {
                topic.quizzes.forEach(quiz => {
                    // Add topic metadata to the question for reference in 'Review' mode
                    const questionsWithContext = quiz.questions.map(q => ({
                        ...q,
                        topicId: topic.id,
                        topicName: topic.name
                    }));
                    allQuestions = [...allQuestions, ...questionsWithContext];
                });
            }
        });

        if (allQuestions.length < questionCount) {
            console.warn(`Not enough questions for ${subject.name}. Requested ${questionCount}, found ${allQuestions.length}. Returning all.`);
            questionCount = allQuestions.length;
        }

        // 3. Shuffle and Slice (Fisher-Yates Shuffle)
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }

        const selectedQuestions = allQuestions.slice(0, questionCount);

        // 4. Calculate total marks
        const totalMarks = selectedQuestions.reduce((sum, q) => sum + (q.marks || 1), 0);

        // 5. Construct the Test Object
        const test: MockTest = {
            id: `mock-${Date.now()}`,
            subjectId: subject.id,
            subjectName: subject.name,
            questions: selectedQuestions,
            timeLimit: Math.ceil(questionCount * 1.5), // Approx 1.5 mins per question
            totalMarks: totalMarks,
            dateGenerated: new Date().toISOString()
        };

        return test;
    }

    /**
     * Calculates the GCSE Grade (9-1) based on percentage.
     * This is a rough approximation of standard grade boundaries.
     */
    static calculateGrade(percentage: number): number {
        if (percentage >= 90) return 9;
        if (percentage >= 80) return 8;
        if (percentage >= 70) return 7;
        if (percentage >= 60) return 6;
        if (percentage >= 50) return 5; // Strong Pass
        if (percentage >= 40) return 4; // Standard Pass
        if (percentage >= 30) return 3;
        if (percentage >= 20) return 2;
        if (percentage >= 10) return 1;
        return 0; // U
    }
}
