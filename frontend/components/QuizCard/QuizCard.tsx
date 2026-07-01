"use client";

import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuiz } from "@/lib/quiz";
import { Quiz } from "@/types/quiz";
import styles from "./QuizCard.module.css";
import Icon from "../Icon/Icon";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: removeQuiz } = useMutation({
    mutationFn: (id: string) => deleteQuiz(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
  return (
    <>
      <li className={styles.card}>
        <Link href={`/quizzes/${quiz.id}`} className={styles.link}>
          <h2 className={styles.title}>{quiz.title}</h2>
          <p className={styles.questionsCount}>
            Questions count: {quiz.questionsCount}
          </p>
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.button}
          aria-label="Delete"
        >
          <Icon name="delete" className={styles.deleteIcon} />
        </button>
      </li>
      {isModalOpen && (
        <Modal onModalClose={() => setIsModalOpen(false)}>
          <h2 className={styles.modalTitle}>Delete quiz</h2>
          <p className={styles.modalText}>
            Are you sure you want to delete this quiz?
          </p>
          <div className={styles.btnWrapper}>
            <Button
              text="Delete"
              onClick={() => removeQuiz(quiz.id)}
              className={styles.deleteBtn}
              variant="secondary"
            />
            <Button
              text="Cancel"
              onClick={() => setIsModalOpen(false)}
              className={styles.cancelBtn}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
