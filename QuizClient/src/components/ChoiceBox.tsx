import React from "react";

import type { OptionDto } from "../models/OptionDto";
interface Props {
  word: OptionDto;
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
