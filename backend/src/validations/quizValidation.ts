import { Joi, Segments } from 'celebrate';

export const createQuizSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().required(),

    questions: Joi.array()
      .items({
        text: Joi.string().required(),
        type: Joi.string().required(),
        options: Joi.array(),
        correctAnswers: Joi.array(),
      })
      .required(),
  }),
};

export const quizIdSchema = {
  [Segments.PARAMS]: Joi.object({
    quizId: Joi.string().required(),
  }),
};
