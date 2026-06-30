import { Quiz } from "@/types/quiz";
import QuizCard from "../QuizCard/QuizCard";
import styles from "./QuizzesList.module.css";

interface QuizzesListProps {
  quizzes: Quiz[];
}
export default function QuizzesList({ quizzes }: QuizzesListProps) {
  return (
    <ul className={styles.list}>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </ul>
  );
}
