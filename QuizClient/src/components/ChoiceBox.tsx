import React from "react";
import type { Word } from "../models/Word";
interface Props {
  word: Word;
}
const ChoiceBox = ({ word }: Props) => {
  return (
    <>
      <button className="border-2 m-[2rem] p-[2rem] rounded text-[1.5rem]">
        {word.content}
      </button>
    </>
  );
};

export default ChoiceBox;
