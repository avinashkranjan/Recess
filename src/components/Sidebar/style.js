export default function styles(theme) {
  return {
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
      borderTop: "1px solid " + theme.palette.secondary.dark,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      color: theme.palette.text.primary,
      gridGap: 10,
    },
    authBox: {
      height: 55,
      borderTop: "1px solid " + theme.palette.secondary.dark,
      display: "flex",
      justifyContent: "space-around",
      color: theme.palette.text.primary,
      gridGap: 10,
    },
    signInBtn: {
      width: "100%",
    },
    signUpBtn: {
      width: "100%",
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
