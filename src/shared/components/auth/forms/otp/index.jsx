import {  useState } from "react";

import CheckOTP from "./checkOTP";
import SendOTP from "./sendOTP";

const OTPAuth = () => {
  const [mobile, setMobile] = useState("");
  const [expireCode, setExpireCode] = useState(0);
  const [isSendOtpLevel, setIsSendOtpLevel] = useState(true);

  return (
    <>
      {isSendOtpLevel ? (
        <SendOTP
          setMobile={setMobile}
          nextLevel={() => {
            setIsSendOtpLevel(false);
          }}
          setExpireCode={setExpireCode}
        />
      ) : (
        <CheckOTP
          mobile={mobile}
          expireCode={expireCode}
        />
      )}
    </>
  );
};

export default OTPAuth;
