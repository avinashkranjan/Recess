export default function styles(theme) {
  return {
    root: {
      height: "55px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.main,
        borderRight: "1px solid " + theme.palette.secondary.main,
      },
    },
    pageHeader: {
      padding: "0 14px",
      height: "55px",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.main,
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
