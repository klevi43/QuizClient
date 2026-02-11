import type { QuestionDto } from "./QuestionDto";

export interface QuizDto {
  id: number;
  questionList: QuestionDto[];
}
