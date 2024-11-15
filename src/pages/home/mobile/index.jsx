import PropTypes from "prop-types";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import CardsPreview from "../cards_preview";
import { Button } from "@mui/material";
import Supabase from "../../../lib/helper/ClientSupabase";

const Mobile = ({ data, isLoading }) => {
  const handleLoginGoogle = () => {
    // Supabase.auth.signInWithOAuth({ provider: "google" });
    // Supabase.auth.signUp({
    // email: "alimansouri.dev.82@gmail.com",
    // password: "123456",
    // phone: "+989919531749",
    // type: "signup",
    // options:{}
    // token_hash: "eecLyOO918OLd81NzCRpVIfDXjxjLFAM",
    // token: "1731619071",
    // });
    // const { data, error } = Supabase.auth.verifyOtp({
    //   phone: "+989919531749",
    //   token: "568933",
    //   type: "sms",
    // });
  };
  const handleLoginGithub = () => {
    Supabase.auth.signInWithOAuth({ provider: "github" });
  };
  const handleLogout = () => {
    Supabase.auth.signOut();
  };

  return (
    <BasicLayoutMobile>
      <Button onClick={handleLoginGoogle}>Login With Google</Button>
      <Button onClick={handleLoginGithub}>Login With GitHub</Button>
      <Button onClick={handleLogout}>Logut</Button>
      <CardsPreview key={1} data={data} isLoading={isLoading} city="aaa" />
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Mobile;
