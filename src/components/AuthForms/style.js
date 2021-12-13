export default function styles(theme) {
  return {
    auth: {
      outline: "none",
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    field: {
      width: "100%",
      marginBottom: 20,
    },
    close: {
      textAlign: 'right',
      cursor: 'pointer'
    },
    orSpan: {
      textAlign: "center",
      marginRight: 10,
    },
    loginButton: {
      marginLeft: "36%",
      marginBottom: "6px",
    },
    googleButton: {
      marginLeft: "15%",
      marginTop: "6%",
    },
    socialLogin: {
      display: "flex",
      width: "-webkit-calc(100% - 50px)",
      justifyContent: "space-evenly",
      marginLeft: "6%",
      marginTop: "6%",
    },
    socialLoginText: {
      display: "flex",
      width: "-webkit-calc(100% - 50px)",
      justifyContent: "space-around",
      marginLeft: "6%",
    },
    // githubButton: {
    //   border: "3px solid  white",
    //   backgroundColor: "white",
    //   borderRadius: "10px",
    //   marginLeft: "20%",
    //   marginTop: "5%",
    // },
    // facebookButton: {
    //   border: "3px solid  white",
    //   backgroundColor: "white",
    //   borderRadius: "10px",
    //   marginLeft: "18%",
    // },
    // twitterButton: {
    //   border: "3px solid  white",
    //   backgroundColor: "white",
    //   borderRadius: "10px",
    //   marginLeft: "20%",
    //   marginTop: "5%",
    // },
  };
}
