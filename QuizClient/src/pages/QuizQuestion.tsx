import React from "react";
import QuestionBox from "../components/QuestionBox";
import ChoiceBox from "../components/ChoiceBox";
import useGetQuiz from "../hooks/useGetQuiz";
import { answerSocketService } from "../services/websocket/client";
const QuizQuestion = () => {
  const { data: quizDto, error, isLoading } = useGetQuiz(1);
  console.log(quizDto);
  return (
    <div>
      <div className="flex justify-center mt-[2rem]">
        {quizDto && <QuestionBox content={quizDto.questionList[1].content} />}
      </div>
      <div className="flex justify-center">
        {quizDto &&
          quizDto.questionList[0].options.map((option) => (
            <ChoiceBox
              key={option.id}
              option={option}
              questionId={quizDto.questionList[0].id}
            />
          ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
