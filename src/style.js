import { darkTheme, createMuiTheme } from "./theme";

// const theme = createMuiTheme(darkTheme);
export default function styles(theme) {
  return {
    "@global": {
      "*": {
        margin: 0,
        fontFamily: "Poppins, sans-serif",
        textDecoration: "none",
        boxSizing: "border-box",
      },
      "*::-webkit-scrollbar": {
        appearance: "none",
        width: 10,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.secondary.main,
      },
    },

    homeBody: {
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.dark,
        borderRight: "1px solid " + theme.palette.secondary.dark,
      },
    },

    posts: {
      paddingBottom: 55,
      overflowX: "hidden",
      overflowY: "scroll",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.dark,
      },
    },
  };
}
