import { Alert, Button, Link, Snackbar } from "@mui/material";
import PropTypes from "prop-types";

const SnackbarComponent = ({ data }) => {
  return (
    data?.type &&
    data?.content && (
      <Snackbar open={true} autoHideDuration={6000}>
        <Alert severity={data?.type} variant="filled" sx={{ width: "100%" }}>
          {data?.content}
          <Link to={"/"} className="!ml-2">
            <Button variant="text">ok</Button>
          </Link>
        </Alert>
      </Snackbar>
    )
  );
};
SnackbarComponent.propTypes = {
  data: PropTypes.any,
};
export default SnackbarComponent;
