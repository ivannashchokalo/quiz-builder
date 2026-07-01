import { getQuizById } from "@/lib/quiz";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import styles from "./QuizDetailes.module.css";
import Title from "@/components/Title/Title";
import { Metadata } from "next";

interface QuizDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: QuizDetailsProps): Promise<Metadata> {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return {
    title: `${quiz.title} | Quiz Builder`,
  };
}

export default async function QuizDetails({ params }: QuizDetailsProps) {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return (
    <Section>
      <Container className={styles.container}>
        <Title>{quiz.title}</Title>
        <ul className={styles.list}>
          {quiz.questions.map((question, index) => (
            <li className={styles.listItem} key={question.id}>
              <p className={styles.listTitle}>Question {index + 1}</p>
              <p className={styles.question}>{question.text}</p>
              <p className={styles.type}>{question.type}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
