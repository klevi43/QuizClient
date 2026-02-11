import React from "react";
import QuestionBox from "../components/QuestionBox";
import ChoiceBox from "../components/ChoiceBox";
import useGetQuiz from "../hooks/useGetQuiz";

const QuizQuestion = () => {
  const { data: quizDto, error, isLoading } = useGetQuiz(1);

  return (
    <div>
      <div className="flex justify-center mt-[2rem]">
        {quizDto && <QuestionBox content={quizDto.questionList[1].content} />}
      </div>
      {quizDto && <ChoiceBox word={quizDto.questionList[0].options[0]} />}
    </div>
  );
};

export default QuizQuestion;
