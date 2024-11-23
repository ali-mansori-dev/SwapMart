import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import "./index.css";

import MuiContext from "./context/MuiContext.jsx";
import store from "./app/store.js";
import App from "./App.jsx";
import { ResponsiveProvider } from "./context/ResponsiveContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch globally
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MuiContext>
          <CssBaseline />
          <ResponsiveProvider>
            <App />
          </ResponsiveProvider>
        </MuiContext>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
