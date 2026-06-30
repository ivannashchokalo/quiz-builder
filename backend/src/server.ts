import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errors } from 'celebrate';
import quizRouter from './routes/quizRoutes.js';

console.log(process.env.DATABASE_URL);

const app = express();

app.use(express.json());
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.use('/quizzes', quizRouter);

app.use(notFoundHandler);
app.use(errors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
