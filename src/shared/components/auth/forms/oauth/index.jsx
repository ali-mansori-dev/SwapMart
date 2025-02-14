import { Button } from "@mui/material";
import Supabase from "../../../../../lib/helper/ClientSupabase";

const OAuth = () => {
  const redirectTo =
    import.meta.env.VITE_NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://swap-mart.vercel.app/";

  const handleGoogle = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  };
  const handleGithub = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo },
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
