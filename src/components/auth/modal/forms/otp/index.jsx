import { Button, MenuItem, Select, TextField } from "@mui/material";

const OTPAuth = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="inline-flex gap-4">
          <Select>
            <MenuItem value={10}>+98</MenuItem>
            <MenuItem value={20}>+65</MenuItem>
            <MenuItem value={30}>+1</MenuItem>
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
