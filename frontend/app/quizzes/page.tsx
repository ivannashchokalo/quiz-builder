import { getAllQuizzes } from "@/lib/quiz";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import styles from "./Quizzes.module.css";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import QuizzesClient from "./QuizzesClient";
import Title from "@/components/Title/Title";

export default async function Quizzes() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  return (
    <Section>
      <Container className={styles.container}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Title>Explore Quizzes</Title>
          <QuizzesClient />
        </HydrationBoundary>
      </Container>
    </Section>
  );
}
