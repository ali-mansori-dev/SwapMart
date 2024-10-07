import { Button, Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const PasswordForm = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <TextField label="Email" fullWidth autoFocus />
        <TextField label="Password" fullWidth />
        <Button variant="contained" fullWidth>
          Continue
        </Button>
      </div>
      <div className="py-4">
        <Divider>or</Divider>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={`/signup`}>
          <Button variant="outlined" fullWidth>
            signup
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PasswordForm;
