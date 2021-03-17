export default function styles(theme) {
  return {
    root: {
      overflow: "hidden",
      height: "55px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.dark,
        borderRight: "1px solid " + theme.palette.secondary.dark,
      },
    },
    pageHeader: {
      padding: "0 14px",
      height: "55px",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.dark,
      },
    },
    pageTitle: {
      fontSize: 20,
      color: theme.palette.text.primary,
    },
    themeChanger: {
      marginLeft: "auto",
    },
    userPhoto: {
      margin: "auto",
    },
  };
}
