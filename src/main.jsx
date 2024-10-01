import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import MuiContext from "./context/MuiContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MuiContext>
        <CssBaseline />
        <App />
      </MuiContext>
    </Provider>
  </StrictMode>
);
