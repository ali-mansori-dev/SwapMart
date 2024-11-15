import { Alert } from "@mui/material";
import PropTypes from "prop-types";

const AlertComponent = ({ data }) => {
  return (
    data?.type &&
    data?.content && <Alert severity='error' variant="standard">{data?.content}</Alert>
  );
};
AlertComponent.propTypes = {
  data: PropTypes.any,
};
export default AlertComponent;
