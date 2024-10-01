import { CircularProgress } from "@mui/material";
import DotLoader from "./dot_loader";

const LoadingScreenFixed = () => {
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50">
      <DotLoader />
    </div>
  );
};
const LoadingSection = () => {
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50">
      <CircularProgress variant="indeterminate" color="primary" />
    </div>
  );
};

export { LoadingScreenFixed, LoadingSection };
