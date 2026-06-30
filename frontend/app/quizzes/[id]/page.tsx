import { getQuizById } from "@/lib/quiz";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

interface QuizDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function QuizDetails({ params }: QuizDetailsProps) {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return (
    <Section>
      <Container>
        <h1>{quiz.title}</h1>

        <ul>
          {quiz.questions.map((question) => (
            <li key={question.id}>
              <p>{question.text}</p>
              <p>{question.type}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
