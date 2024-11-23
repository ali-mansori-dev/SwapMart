import { Alert } from "@mui/material";
import PropTypes from "prop-types";

const AlertComponent = ({ data }) => {
  if (!data?.type || !data?.content) return <></>;

  return (
    <Alert severity={data.type} variant="standard">
      {data.content}
    </Alert>
  );
};

AlertComponent.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
    content: PropTypes.string.isRequired,
  }),
};

AlertComponent.defaultProps = {
  data: null, // No alert by default
};

export default AlertComponent;
