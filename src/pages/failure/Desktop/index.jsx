import React from "react";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import Lottie from "react-lottie";
import successAnimation from "../../../lotties/Failure.json";

const Desktop = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-col items-center gap-6 py-28">
        <Lottie options={defaultOptions} height={200} width={200} />
        <span>Your Order Successfully Payed!</span>
      </div>
    </BasicLayoutDesktop>
  );
};

export default Desktop;
