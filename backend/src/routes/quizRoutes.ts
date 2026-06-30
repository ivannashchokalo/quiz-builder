import { Router } from 'express';
import {
  createQuiz,
  deleteQuiz,
  getAllQuizzes,
  getQuizById,
} from '../controllers/quizController.js';
import { celebrate } from 'celebrate';
import {
  createQuizSchema,
  quizIdSchema,
} from '../validations/quizValidation.js';

const router = Router();

router.post('/', celebrate(createQuizSchema), createQuiz);
router.get('/', getAllQuizzes);
router.get('/:quizId', celebrate(quizIdSchema), getQuizById);
router.delete('/:quizId', celebrate(quizIdSchema), deleteQuiz);

export default router;
