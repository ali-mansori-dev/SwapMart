import { Alert, Button, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SnackbarComponent = ({ data, autoHideDuration = 6000, onClose }) => {
  if (!data?.type || !data?.content) return null;

  return (
    <Snackbar open={true} autoHideDuration={autoHideDuration} onClose={onClose}>
      <Alert
        severity={data.type}
        variant="filled"
        sx={{ width: "100%" }}
        action={
          data.actionLink && (
            <Link to={data.actionLink} className="!ml-2">
              <Button variant="text" size="small">
                {data.actionLabel || "OK"}
              </Button>
            </Link>
          )
        }
      >
        {data.content}
      </Alert>
    </Snackbar>
  );
};

SnackbarComponent.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
    content: PropTypes.string.isRequired,
    actionLink: PropTypes.string, // Optional link for the action button
    actionLabel: PropTypes.string, // Optional label for the action button
  }),
  autoHideDuration: PropTypes.number, // Duration for the snackbar to stay open
  onClose: PropTypes.func, // Callback for when the snackbar closes
};

SnackbarComponent.defaultProps = {
  data: null,
  autoHideDuration: 6000,
  onClose: () => {}, // Default to a no-op function
};

export default SnackbarComponent;
