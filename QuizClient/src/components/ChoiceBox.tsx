import React, { useState } from "react";
import { answerSocketService } from "../services/websocket/client";
import type { OptionDto } from "../models/OptionDto";
import type { AnswerDto } from "../models/answerDto";
interface Props {
  option: OptionDto;
  questionId: number;
  lastSubmissionId: number | undefined;
  isCorrect: boolean | undefined;
  handleChoice: (optionId: number) => void;
}

const ChoiceBox = ({
  option,
  questionId,
  lastSubmissionId,
  isCorrect,
  handleChoice,
}: Props) => {
  const ans: AnswerDto = {
    from: "user123",
    optionId: option.id,
    questionId: questionId,
  };

  return (
    <>
      <button
        onClick={() => {
          answerSocketService.submitAnswer("/app/receive-answer", ans);
          handleChoice(option.id);
        }}
        className={`
          ${
            lastSubmissionId && isCorrect && lastSubmissionId === option.id
              ? "bg-green-400"
              : "bg-blue-50 hover:bg-yellow-200 "
          }
          ${
            lastSubmissionId && !isCorrect && lastSubmissionId === option.id
              ? "bg-red-400"
              : "bg-blue-50 hover:bg-yellow-200 "
          }
              w-[25%] m-[2rem] p-[2rem] rounded text-[1.8rem]
      `}
      >
        {option.content}
      </button>
    </>
  );
};

export default ChoiceBox;
