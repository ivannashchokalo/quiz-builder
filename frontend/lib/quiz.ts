import { api } from "./api";
import { Quiz, QuizDetails, CreateQuizRequest } from "@/types/quiz";

export const getAllQuizzes = async () => {
  const { data } = await api.get<Quiz[]>("/quizzes");
  console.log(11111, data);
  return data;
};

export const getQuizById = async (quizId: string) => {
  const { data } = await api.get<QuizDetails>(`/quizzes/${quizId}`);
  return data;
};

export const createQuiz = async (body: CreateQuizRequest) => {
  const { data } = await api.post<QuizDetails>("/quizzes", body);
  return data;
};

export const deleteQuiz = async (quizId: string) => {
  const { data } = await api.delete<QuizDetails>(`/quizzes/${quizId}`);
  return data;
};
