"use client";

import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuiz } from "@/lib/quiz";
import { Quiz } from "@/types/quiz";
import styles from "./QuizCard.module.css";

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const queryClient = useQueryClient();

  const { mutate: removeQuize } = useMutation({
    mutationFn: (id: string) => deleteQuiz(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
  return (
    <li className={styles.card}>
      <Link href={`/quizzes/${quiz.id}`} className={styles.link}>
        <h2>{quiz.title}</h2>
        <p>Questions count: {quiz.questionsCount}</p>
      </Link>
      <button onClick={() => removeQuize(quiz.id)} className={styles.button}>
        delete
      </button>
    </li>
  );
}
