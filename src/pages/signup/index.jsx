import { Button, Divider, TextField } from "@mui/material";
import BasicLayoutMobile from "../../layouts/mobile/basic_layout";

const Signup = () => {
  return (
    <BasicLayoutMobile>
      <div className="w-full h-full flex justify-center items-center my-auto relative">
        <div className="flex flex-col gap-5 border border-gray-200 rounded-md p-8 py-8 w-[35%]">
          <TextField label="FullName" fullWidth autoFocus />
          <TextField label="Email" fullWidth />
          <TextField label="Password" fullWidth />
          <Button variant="contained" fullWidth>
            Signup
          </Button>
          <div className="py-1">
            <Divider>or</Divider>
          </div>
          <Button
            variant="outlined"
            // onClick={setAuthMethod.bind(this, "password")}
            fullWidth
          >
            Signup with Email
          </Button>
        </div>
      </div>
    </BasicLayoutMobile>
  );
};

export default Signup;
