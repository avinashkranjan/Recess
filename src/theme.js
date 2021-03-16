import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
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

const theme = createMuiTheme(darkTheme);

export { theme, ThemeProvider };
