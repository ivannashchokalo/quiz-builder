"use client";

import QuizzesList from "@/components/QuizzesList/QuizzesList";
import { getAllQuizzes } from "@/lib/quiz";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styles from "./Quizzes.module.css";

export default function QuizzesClient() {
  const { data } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
    refetchOnMount: false,
  });

  return (
    <>
      <Link href="/quizzes/create" className={styles.createLink}>
        Create Quiz
      </Link>
      {data && <QuizzesList quizzes={data} />}
    </>
  );
}
