import React from "react";
interface Props {
  content: string;
}
const QuestionBox = ({ content }: Props) => {
  return (
    <>
      <div className="bg-blue-100 flex justify-center items-center  w-[80%] rounded">
        <div className="text-[2rem] py-[4rem]">{content}</div>
      </div>
    </>
  );
};

export default QuestionBox;
