import React from "react";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import successAnimation from "../../../lotties/NotFound.json";
import Lottie from "react-lottie";

const Desktop = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-col items-center gap-3 py-20">
        <Lottie options={defaultOptions} height={210} width={300} />
        <h1 className="pt-8 pb-4 text-2xl font-bold">404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <a href="/">Go Back to Home</a>
      </div>
    </BasicLayoutDesktop>
  );
};

export default Desktop;
