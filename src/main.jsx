import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import "./index.css";
import MuiContext from "./context/MuiContext.jsx";
import store, { persistor } from "./app/store.js";
import App from "./App.jsx";
import { ResponsiveProvider } from "./context/ResponsiveContext.jsx";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MuiContext>
            <CssBaseline />
            <ResponsiveProvider>
              <App />
            </ResponsiveProvider>
          </MuiContext>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
