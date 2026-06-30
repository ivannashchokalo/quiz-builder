export interface Quiz {
  id: string;
  title: string;
  questionsCount: number;
}

export interface Question {
  id: string;
  text: string;
  type: "boolean" | "input" | "checkbox";
  options: string[] | null;
  correctAnswers: string[] | null;
  quizId: string;
}

export interface QuizDetails {
  id: string;
  title: string;
  questions: Question[];
}

export interface CreateQuestion {
  text: string;
  type: "boolean" | "input" | "checkbox";
  options?: string[];
  correctAnswers?: string[];
}

export interface CreateQuizRequest {
  title: string;
  questions: CreateQuestion[];
}
