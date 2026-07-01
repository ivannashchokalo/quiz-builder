"use client";

import QuizzesList from "@/components/QuizzesList/QuizzesList";
import { getAllQuizzes } from "@/lib/quiz";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/Button/Button";
import styles from "./Quizzes.module.css";

export default function QuizzesClient() {
  const { data } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
    refetchOnMount: false,
  });

  return (
    <>
      <Button href="/create" text="Create Quiz" className={styles.button} />
      {data?.length ? (
        <QuizzesList quizzes={data} />
      ) : (
        <p className={styles.emptyText}>
          No quizzes yet. Create your first quiz!
        </p>
      )}
    </>
  );
}
