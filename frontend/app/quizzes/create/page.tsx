import Container from "@/components/Container/Container";
import QuizForm from "@/components/QuizForm/QuizForm";
import Section from "@/components/Section/Section";

export default function CreateQuizPage() {
  return (
    <Section>
      <Container>
        <h1>Create Quiz</h1>
        <QuizForm />
      </Container>
    </Section>
  );
}
