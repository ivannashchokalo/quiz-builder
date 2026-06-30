import { Request, Response } from 'express';
import { prisma } from '../prisma/prisma.js';

interface QuizParams {
  quizId: string;
}

interface QuestionBody {
  text: string;
  type: string;
  options?: string[];
  correctAnswers?: string[];
}

// interface CreateQuizBody {
//   title: string;
//   questions: QuestionBody[];
// }

export const createQuiz = async (req: Request, res: Response) => {
  const { title, questions } = req.body;

  const quiz = await prisma.quiz.create({
    data: {
      title,
      questions: {
        create: questions.map((question: QuestionBody) => ({
          text: question.text,
          type: question.type,
          options: question.options,
          correctAnswers: question.correctAnswers,
        })),
      },
    },
    include: {
      questions: true,
    },
  });

  res.status(201).json(quiz);
};

export const getAllQuizzes = async (req: Request, res: Response) => {
  const quizzes = await prisma.quiz.findMany({
    select: {
      id: true,
      title: true,
      _count: {
        select: {
          questions: true,
        },
      },
    },
  });

  const result = quizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    questionsCount: quiz._count.questions,
  }));

  res.status(200).json(result);
};

export const getQuizById = async (req: Request<QuizParams>, res: Response) => {
  const { quizId } = req.params;

  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
    include: {
      questions: true,
    },
  });

  if (!quiz) {
    res.status(404).json({
      message: 'Quiz not found',
    });

    return;
  }

  res.status(200).json(quiz);
};

export const deleteQuiz = async (req: Request<QuizParams>, res: Response) => {
  const { quizId } = req.params;

  const quiz = await prisma.quiz.findUnique({
    where: {
      id: quizId,
    },
  });

  if (!quiz) {
    res.status(404).json({
      message: 'Quiz not found',
    });

    return;
  }

  await prisma.quiz.delete({
    where: {
      id: quizId,
    },
  });

  res.status(200).json(quiz);
};
