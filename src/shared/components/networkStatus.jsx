import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // first state

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    //add add listener
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //delete add listener
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <Snackbar
      open={!isOnline}
      autoHideDuration={10000}
      onClose={handleOnline}
      message="You Are Offline"
    />
  );
};

export default NetworkStatus;
