import { getAllQuizzes } from "@/lib/quiz";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import QuizzesClient from "./quizzes/QuizzesClient";
import styles from "./page.module.css";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  return (
    <Section>
      <Container className={styles.container}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <QuizzesClient />
        </HydrationBoundary>
      </Container>
    </Section>
  );
}
