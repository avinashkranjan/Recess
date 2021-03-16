export default function styles(theme) {
  return {
    homeBody: {
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.main,
        borderRight: "1px solid " + theme.palette.secondary.main,
      },
    },
    posts: {
      paddingBottom: 55,
      overflowX: "hidden",
      overflowY: "scroll",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid " + theme.palette.secondary.main,
      },
    },
    link: {
      height: 55,
      width: "100%",
      display: "grid",
      padding: "14px 10px",
      gridTemplateColumns: "auto 1fr",
      gridGap: 10,
      fontSize: 20,
      alignItems: "center",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main + "8a",
      },
    },
    account: {
      height: 55,
      borderTop: "1px solid " + theme.palette.secondary.main,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      color: theme.palette.text.primary,
      gridGap: 10,
    },
    userPhoto: {
      margin: "auto 0 auto 10px",
    },
    username: {
      margin: "auto 0",
    },
    logOutIcon: {
      margin: "auto",
    },
  };
}
