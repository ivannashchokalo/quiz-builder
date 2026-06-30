export interface Question {
  text: string;
  type: "boolean" | "input" | "checkbox";
  options: string[];
  correctAnswers: string[];
}
