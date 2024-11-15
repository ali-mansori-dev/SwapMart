import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({});
  const setAlertContent = (type, content) => {
    setAlert({type, content});
  };

  return [alert, setAlertContent];
};
export default useAlert;
