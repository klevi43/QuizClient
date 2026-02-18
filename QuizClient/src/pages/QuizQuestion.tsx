import React, { useState } from "react";
import QuestionBox from "../components/QuestionBox";
import ChoiceBox from "../components/ChoiceBox";
import useGetQuiz from "../hooks/useGetQuiz";
import { answerSocketService } from "../services/websocket/client";
const QuizQuestion = () => {
  const { data: quizDto, error, isLoading } = useGetQuiz(1);
  console.log(quizDto);
  const [questionNo, setQuestionNo] = useState<number>(0);

  const incrementQuestionNo = () => {
    setQuestionNo(questionNo + 1);
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
              incrementQuestionNo={incrementQuestionNo}
            />
          ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
