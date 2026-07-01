import Container from "@/components/Container/Container";
import QuizForm from "@/components/QuizForm/QuizForm";
import Section from "@/components/Section/Section";
import Title from "@/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Quiz",
};

export default function CreateQuizPage() {
  return (
    <Section>
      <Container>
        <Title>Create Quiz</Title>
        <QuizForm />
      </Container>
    </Section>
  );
}
