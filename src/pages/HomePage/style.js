export default function styles(theme) {
  return {
    homeBody: {
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid var(--border-color)",
        borderRight: "1px solid var(--border-color)",
      },
    },
    posts: {
      height: window.innerHeight - 55,
      overflowX: "hidden",
      overflowY: "scroll",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid var(--border-color)",
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
        backgroundColor: "var(--secondary-app-color)",
      },
    },
    account: {
      marginTop: window.innerHeight - 330,
      height: 55,
      borderTop: "1px solid var(--border-color)",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      color: "var(--primary-text-color)",
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
      color: "#FF4D4D",
    },
  };
}
