import React from "react";
import type { Word } from "../models/Word";
interface Props {
  word: Word;
}
const ChoiceBox = ({ word }: Props) => {
  return (
    <>
      <button>{word.content}</button>
    </>
  );
};

export default ChoiceBox;
