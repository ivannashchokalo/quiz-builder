import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { notFoundHandler } from './middleware/notFoundHandler.js';

const app = express();

app.use(express.json());
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
