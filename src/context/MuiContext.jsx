import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const theme = createTheme({
  direction: "ltr",
  typography: { fontFamily: "IranYekanX" },
  palette: {
    mode: "light",
    primary: {
      light: "#2B7FAD",
      main: "#A40000",
      dark: "#1E5979",
      contrastText: "#fff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#EAF2F7",
          color: "#A40000",
          borderRadius: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: "red",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        dir: "ltr",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { outline: { borderRadius: "18px" } },
      },
    },
    MuiMenu: { styleOverrides: {} },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#D1D5DB",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          background: "#FDE8E8",
          color: "#C81E1E",
          borderRadius: "8px",
        },
      },
    },
    MuiDialog: { styleOverrides: { paper: { borderRadius: "8px" } } },
    MuiButton: {
      defaultProps: {
        sx: {
          paddingY: "10px",
          borderRadius: "8px",
          boxShadow: "none",
        },
      },
      styleOverrides: {
        contained: {
          fontWeight: 500,
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#111928",
        },
      },
    },
  },
});

export default function MuiContext({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
MuiContext.propTypes = {
  children: PropTypes.node,
};
