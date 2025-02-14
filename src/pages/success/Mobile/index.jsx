import React from "react";
import Lottie from "react-lottie";
import successAnimation from "../../../lotties/Success.json";

const Mobile = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center gap-6 py-28">
      <Lottie options={defaultOptions} height={200} width={200} />
      <span>Your Order Successfully Payed!</span>
    </div>
  );
};

export default Mobile;
