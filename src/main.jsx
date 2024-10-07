import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.jsx";
import "./index.css";
import MuiContext from "./context/MuiContext.jsx";
import store from "./app/store.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MuiContext>
          <CssBaseline />
          <App />
        </MuiContext>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
