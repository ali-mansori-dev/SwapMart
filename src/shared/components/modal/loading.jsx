import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import onboardingAnimation from "../../../lotties/Onboarding.json";
import Lottie from "react-lottie";

const LoadingModal = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: onboardingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Dialog open={isLoading} fullScreen>
      <div className="w-full h-full flex justify-center items-center">
        <Lottie options={defaultOptions} height={210} width={300} />
      </div>
    </Dialog>
  );
};

export default LoadingModal;
