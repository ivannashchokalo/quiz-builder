"use client";

import { createQuiz } from "@/lib/quiz";
import type { CreateQuizRequest } from "@/types/quiz";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type QuestionType = "boolean" | "input" | "checkbox";

interface FormOption {
  text: string;
  checked: boolean;
}

interface FormQuestion {
  question: string;
  type: QuestionType;
  answer: string | boolean;
  options: FormOption[];
}

interface QuizFormValues {
  title: string;
  questions: FormQuestion[];
}

const initialState: QuizFormValues = {
  title: "",
  questions: [],
};

export default function QuizForm() {
  const [quiz, setQuiz] = useState(initialState);
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createQuiz,
    onSuccess: () => router.push("/"),
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({
      ...quiz,
      title: e.target.value,
    });
  };

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          question: "",
          type: "boolean",
          answer: true,
          options: [],
        },
      ],
    });
  };

  const removeQuestion = (index: number) => {
    const questions = [...quiz.questions];
    questions.splice(index, 1);

    setQuiz({
      ...quiz,
      questions,
    });
  };

  const addOption = (questionIndex: number) => {
    const questions = [...quiz.questions];

    questions[questionIndex].options.push({
      text: "",
      checked: false,
    });

    setQuiz({
      ...quiz,
      questions,
    });
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const questions = [...quiz.questions];

    questions[questionIndex].options.splice(optionIndex, 1);

    setQuiz({
      ...quiz,
      questions,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: CreateQuizRequest = {
      title: quiz.title,
      questions: quiz.questions.map((question) => ({
        text: question.question,
        type: question.type,
        options:
          question.type === "checkbox"
            ? question.options.map((option) => option.text)
            : undefined,
        correctAnswers:
          question.type === "checkbox"
            ? question.options
                .filter((option) => option.checked)
                .map((option) => option.text)
            : [String(question.answer)],
      })),
    };

    mutate(body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quiz title"
        value={quiz.title}
        onChange={handleTitleChange}
      />

      {quiz.questions.map((question, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <h3>Question {index + 1}</h3>

          <input
            type="text"
            placeholder="Question"
            value={question.question}
            onChange={(e) => {
              const questions = [...quiz.questions];
              questions[index].question = e.target.value;

              setQuiz({
                ...quiz,
                questions,
              });
            }}
          />
          <select
            value={question.type}
            onChange={(e) => {
              const questions = [...quiz.questions];

              questions[index].type = e.target.value as QuestionType;
              questions[index].answer =
                e.target.value === "boolean" ? true : "";
              questions[index].options =
                e.target.value === "checkbox" ? [] : [];

              setQuiz({
                ...quiz,
                questions,
              });
            }}
          >
            <option value="boolean">Boolean</option>
            <option value="input">Input</option>
            <option value="checkbox">Checkbox</option>
          </select>

          {question.type === "boolean" && (
            <>
              <label>
                <input
                  type="radio"
                  checked={question.answer === true}
                  onChange={() => {
                    const questions = [...quiz.questions];
                    questions[index].answer = true;

                    setQuiz({
                      ...quiz,
                      questions,
                    });
                  }}
                />
                True
              </label>

              <label style={{ marginLeft: 20 }}>
                <input
                  type="radio"
                  checked={question.answer === false}
                  onChange={() => {
                    const questions = [...quiz.questions];
                    questions[index].answer = false;

                    setQuiz({
                      ...quiz,
                      questions,
                    });
                  }}
                />
                False
              </label>
            </>
          )}

          {question.type === "input" && (
            <input
              type="text"
              placeholder="Correct answer"
              value={String(question.answer)}
              onChange={(e) => {
                const questions = [...quiz.questions];
                questions[index].answer = e.target.value;

                setQuiz({
                  ...quiz,
                  questions,
                });
              }}
            />
          )}

          {question.type === "checkbox" && (
            <>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="text"
                    placeholder="Option"
                    value={option.text}
                    onChange={(e) => {
                      const questions = [...quiz.questions];

                      questions[index].options[optionIndex].text =
                        e.target.value;

                      setQuiz({
                        ...quiz,
                        questions,
                      });
                    }}
                  />

                  <label>
                    <input
                      type="checkbox"
                      checked={option.checked}
                      onChange={(e) => {
                        const questions = [...quiz.questions];

                        questions[index].options[optionIndex].checked =
                          e.target.checked;

                        setQuiz({
                          ...quiz,
                          questions,
                        });
                      }}
                    />
                    Correct
                  </label>

                  <button
                    type="button"
                    onClick={() => removeOption(index, optionIndex)}
                  >
                    Delete option
                  </button>
                </div>
              ))}

              <button type="button" onClick={() => addOption(index)}>
                Add option
              </button>
            </>
          )}

          <button type="button" onClick={() => removeQuestion(index)}>
            Delete question
          </button>
        </div>
      ))}

      <button type="button" onClick={addQuestion}>
        Add question
      </button>
      <button type="submit">Create quiz</button>
    </form>
  );
}
