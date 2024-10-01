import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import MuiContext from "./context/MuiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MuiContext>
      <CssBaseline />
      <App />
    </MuiContext>
  </StrictMode>
);
