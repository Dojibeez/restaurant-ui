import React from "react";

type Props = {
  onclick(): any;
};

const ButtonDark = ({ onclick }: Props) => {
  return (
    <button
      className="fixed top-2/4 -translate-y-[50%] left-10 flex flex-col items-center py-2 px-4 bg-white hover:bg-black shadow-2xl shadow-white hover:shadow-black text-black hover:text-white rounded-lg cursor-pointer transition-all duration-300 z-30 font-source-sans lower"
      onClick={onclick}
    >
      <span>D</span>
      <span>A</span>
      <span>R</span>
      <span>K</span>
      <span className="text-transparent">K</span>
    </button>
  );
};

export default ButtonDark;
