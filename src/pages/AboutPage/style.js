export default function styles(theme) {
  return {
    underAboutPage: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexFlow: "column wrap",
    },
    aboutArt: {
      width: "80%",
      marginBottom: 14,
    },
    underAboutText: {
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    aboutdiv: {
      display: "flex",
      flexDirection: "column",
      padding: "0 5rem",
    },
    aboutHeading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    aboutText: {
      fontSize: "1rem",
      marginBottom: "1rem",
    }
  };
}
