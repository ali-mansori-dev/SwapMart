import { Button, MenuItem, Select, TextField } from "@mui/material";

const OTPAuth = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="inline-flex gap-4">
          <Select value={98}>
            <MenuItem value={98} selected>+98</MenuItem>
            <MenuItem value={65}>+65</MenuItem>
            <MenuItem value={1}>+1</MenuItem>
          </Select>
          <TextField label="Mobile" placeholder="9919536789" fullWidth autoFocus />
        </div>

        <Button variant="contained" fullWidth>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OTPAuth;
