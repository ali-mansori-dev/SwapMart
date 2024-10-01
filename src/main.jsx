import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";

import App from "./App.jsx";
import "./index.css";
import MuiContext from "./context/MuiContext.jsx";
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
