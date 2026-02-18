import React from "react";
import { answerSocketService } from "../services/websocket/client";
import type { OptionDto } from "../models/OptionDto";
import type { AnswerDto } from "../models/answerDto";
interface Props {
  option: OptionDto;
  questionId: number;
  incrementQuestionNo: () => void;
}
const ChoiceBox = ({ option, questionId, incrementQuestionNo }: Props) => {
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
          incrementQuestionNo();
        }}
        className="bg-blue-50 w-[25%] m-[2rem] p-[2rem] rounded text-[1.8rem]
      hover:bg-yellow-200"
      >
        {option.content}
      </button>
    </>
  );
};

export default ChoiceBox;
