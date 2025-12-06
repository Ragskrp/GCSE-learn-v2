import {
  getSubjectsForYear,
  getSubject,
  getTopic,
  curriculumDatabase,
  Subject,
  Topic,
  StudyMaterial,
  Quiz
} from "@/data/curriculum-database";
import { AuthService } from "@/services/auth-service";

export class ContentService {
  static getSubjectsForYear(yearGroup: number): Subject[] {
    return getSubjectsForYear(yearGroup);
  }

  static getSubject(subjectId: string, yearGroup: number): Subject | undefined {
    return getSubject(subjectId, yearGroup);
  }

  static getTopic(subjectId: string, topicId: string, yearGroup: number): Topic | undefined {
    return getTopic(subjectId, topicId, yearGroup);
  }

  static getAllSubjects(): Subject[] {
    // Try to get from logged-in user first
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.profile.subjects && currentUser.profile.subjects.length > 0) {
      return currentUser.profile.subjects as Subject[];
    }
    // Fallback to static database
    return Object.values(curriculumDatabase).flat();
  }

  static getLesson(lessonId: string): StudyMaterial | undefined {
    // Get subjects from the current user, not the static database
    const allSubjects = this.getAllSubjects();
    for (const subject of allSubjects) {
      for (const topic of subject.topics) {
        if (!topic.studyMaterials) {
          console.warn(`[ContentService] Missing studyMaterials for topic: ${topic.id} in subject: ${subject.id}`);
          continue;
        }
        const lesson = topic.studyMaterials.find(m => m.id === lessonId);
        if (lesson) return lesson;
      }
    }
    return undefined;
  }

  static getQuiz(quizId: string): Quiz | undefined {
    const context = this.getQuizWithContext(quizId);
    return context?.quiz;
  }

  static getQuizWithContext(quizId: string): { quiz: Quiz, subjectId: string, topicId: string } | undefined {
    const allSubjects = this.getAllSubjects();
    for (const subject of allSubjects) {
      for (const topic of subject.topics) {
        if (!topic.quizzes) {
          // Quizzes might be optional or empty, but let's be safe
        } else {
          const quiz = topic.quizzes.find(q => q.id === quizId);
          if (quiz) return { quiz, subjectId: subject.id, topicId: topic.id };
        }

        if (topic.tests) {
          const test = topic.tests.find(t => t.id === quizId);
          if (test) return { quiz: test, subjectId: subject.id, topicId: topic.id };
        }
      }
    }
    return undefined;
  }
}
