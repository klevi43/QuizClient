import React from "react";
interface Props {
  currentQuestion: number;
  totalQuestions: number;
}
const QuestionCounter = ({ currentQuestion, totalQuestions }: Props) => {
  return (
    <div className="ml-[2rem] bg-blue-50 rounded-full text-[1.2rem] font-bold  p-[1rem]">
      {currentQuestion} / {totalQuestions}
    </div>
  );
};

export default QuestionCounter;
