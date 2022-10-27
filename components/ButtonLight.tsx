import React from "react";

type Props = {
  onclick(): any;
};

const ButtonLight = ({ onclick }: Props) => {
  return (
    <button
      className="fixed top-2/4 -translate-y-[50%] left-10 flex flex-col items-center py-2 px-4 bg-black hover:bg-white shadow-2xl hover:shadow-white text-white hover:text-black rounded-lg cursor-pointer transition-all duration-300 z-20 font-source-sans lower"
      onClick={onclick}
    >
      <span>L</span>
      <span>I</span>
      <span>G</span>
      <span>H</span>
      <span>T</span>
    </button>
  );
};

export default ButtonLight;
