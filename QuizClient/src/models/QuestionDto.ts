import type { OptionDto } from "./OptionDto";

export interface QuestionDto {
  id: number;
  content: string;
  options: OptionDto[];
  correctOptionId: number;
}
