import React from "react";

interface ITitlePorops {
  'children'?: React.ReactNode | string | number;
}

const Title: React.FC<ITitlePorops> = ({ children }) => {
  return (
    <>
      <hr className="my-4" />
      <div className="text-4xl font-bold flex justify-center items-center">{children}</div>
    </>
  )
};

export default Title;