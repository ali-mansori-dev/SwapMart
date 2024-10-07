import { Button, TextField } from "@mui/material";

const PasswordForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField label="Email" fullWidth />
      <TextField label="Password" fullWidth />
      <Button variant="contained" fullWidth>
        Continue
      </Button>
    </div>
  );
};

export default PasswordForm;
