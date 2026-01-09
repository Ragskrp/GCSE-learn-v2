
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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
  // --- Asynchronous Firebase Methods ---

  static async getAllSubjects(): Promise<Subject[]> {
    try {
      const subjectsRef = collection(db, "subjects");
      const snapshot = await getDocs(subjectsRef);
      if (snapshot.empty) {
        console.warn("No subjects found in Firestore. Falling back to local data.");
        return this.getLocalAllSubjects();
      }
      return snapshot.docs.map(doc => doc.data() as Subject);
    } catch (error) {
      console.error("Error fetching subjects from Firestore:", error);
      return this.getLocalAllSubjects();
    }
  }

  static async getSubjectById(subjectId: string): Promise<Subject | undefined> {
    try {
      const docRef = doc(db, "subjects", subjectId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as Subject;
      }
    } catch (error) {
      console.error("Error fetching subject:", error);
    }
    // Fallback
    return this.getLocalAllSubjects().find(s => s.id === subjectId);
  }

  static async getLessonWithContext(lessonId: string): Promise<{ lesson: StudyMaterial, topic: Topic, subject: Subject } | undefined> {
    // Since lessons are nested in topics which are nested in subjects, 
    // and we don't have a direct index of lessons, we iterate.
    const allSubjects = await this.getAllSubjects();

    for (const subject of allSubjects) {
      for (const topic of subject.topics) {
        if (topic.studyMaterials) {
          const lesson = topic.studyMaterials.find(m => m.id === lessonId);
          if (lesson) return { lesson, topic, subject };
        }
      }
    }
    return undefined;
  }

  static async getQuizWithContext(quizId: string): Promise<{ quiz: Quiz, subjectId: string, topicId: string } | undefined> {
    const allSubjects = await this.getAllSubjects();
    for (const subject of allSubjects) {
      for (const topic of subject.topics) {
        if (topic.quizzes) {
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

  // --- Synchronous/Local Fallbacks ---

  static getSubjectsForYear(yearGroup: number): Subject[] {
    return getSubjectsForYear(yearGroup);
  }

  static getSubject(subjectId: string, yearGroup: number): Subject | undefined {
    return getSubject(subjectId, yearGroup);
  }

  static getTopic(subjectId: string, topicId: string, yearGroup: number): Topic | undefined {
    return getTopic(subjectId, topicId, yearGroup);
  }

  private static getLocalAllSubjects(): Subject[] {
    // Try to get from logged-in user first
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.profile.subjects && currentUser.profile.subjects.length > 0) {
      return currentUser.profile.subjects as Subject[];
    }
    // Fallback to static database
    return Object.values(curriculumDatabase).flat();
  }
}
