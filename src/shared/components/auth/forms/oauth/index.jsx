import { Button } from "@mui/material";
import Supabase from "../../../../../lib/helper/ClientSupabase";

const OAuth = () => {
  const handleGoogle = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "http://localhost:3000/" },
    });
  };
  const handleGithub = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: "http://localhost:3000/" },
    });
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Button variant="outlined" onClick={handleGoogle} fullWidth>
        Continue with Google
      </Button>
      <Button variant="outlined" onClick={handleGithub} fullWidth>
        Continue with Github
      </Button>
    </div>
  );
};

export default OAuth;
