import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  type: "light",
  palette: {
    primary: {
      main: "#121823",
    },
    secondary: {
      main: "#41506B",
      dark: "#9dd4dbbf",
    },
    error: {
      main: "#FF4D4D",
    },
    text: {
      primary: "#121823",
      secondary: "#41506B",
    },
    background: {
      default: "#EEFDFF",
      paper: "#EEFDFF",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

const darkTheme = {
  type: "dark",
  palette: {
    primary: {
      main: "#0CB7D3",
    },
    secondary: {
      main: "#41506B",
      dark: "#242C3D",
    },
    error: {
      main: "#FF4D4D",
    },
    text: {
      primary: "#0CB7D3",
      secondary: "#41506B",
    },
    background: {
      default: "#121823",
      paper: "#121823",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
};

export { lightTheme, darkTheme, createMuiTheme, ThemeProvider };
