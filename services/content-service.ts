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
    return Object.values(curriculumDatabase).flat();
  }

  static getLesson(lessonId: string): StudyMaterial | undefined {
    // This is inefficient but works for now. In a real DB, we'd query by ID.
    const allSubjects = this.getAllSubjects();
    for (const subject of allSubjects) {
      for (const topic of subject.topics) {
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
        const quiz = topic.quizzes.find(q => q.id === quizId);
        if (quiz) return { quiz, subjectId: subject.id, topicId: topic.id };
        const test = topic.tests?.find(t => t.id === quizId);
        if (test) return { quiz: test, subjectId: subject.id, topicId: topic.id };
      }
    }
    return undefined;
  }
}
