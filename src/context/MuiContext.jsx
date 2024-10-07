import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const theme = createTheme({
  direction: "ltr",
  typography: { fontFamily: "Montserrat" },
  palette: {
    mode: "light",
    primary: {
      light: "#ad1a1a",
      main: "#a40000",
      dark: "#940000",
      contrastText: "#fff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#EAF2F7",
          color: "#a40000",
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
          color: "#940000",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          background: "#ad1a1a",
          color: "#940000",
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
          borderColor: "#940000",
          color: "#ad1a1a",
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
