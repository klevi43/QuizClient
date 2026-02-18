import React, { useState } from "react";
import QuestionBox from "../components/QuestionBox";
import ChoiceBox from "../components/ChoiceBox";
import useGetQuiz from "../hooks/useGetQuiz";
import { answerSocketService } from "../services/websocket/client";
const QuizQuestion = () => {
  const { data: quizDto, error, isLoading } = useGetQuiz(1);
  console.log(quizDto);
  const [questionNo, setQuestionNo] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [lastSubmissionId, setLastSubmissionId] = useState<number | undefined>(
    undefined,
  );
  const incrementQuestionNo = () => {
    if (isCorrect) setQuestionNo(questionNo + 1);
  };

  const handleChoice = async (optionId: number) => {
    setLastSubmissionId(optionId);
    answerSocketService.onAnswerResult = async (isCorrect) => {
      setIsCorrect(isCorrect);
      setLastSubmissionId(optionId);
      await sleep(2000);
      if (isCorrect) setQuestionNo(questionNo + 1);
    };
  };

  return (
    <div className="h-full flex flex-col justify-between py-[2rem]">
      <div className=" flex justify-center mt-[2rem]">
        {quizDto && (
          <QuestionBox content={quizDto.questionList[questionNo].content} />
        )}
      </div>
      <div className="flex justify-center">
        {quizDto &&
          quizDto.questionList[questionNo].options.map((option) => (
            <ChoiceBox
              key={option.id}
              option={option}
              questionId={quizDto.questionList[questionNo].id}
              isCorrect={isCorrect}
              lastSubmissionId={lastSubmissionId}
              handleChoice={handleChoice}
            />
          ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
