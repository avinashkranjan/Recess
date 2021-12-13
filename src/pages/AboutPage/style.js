export default function styles(theme) {
  return {
    underAboutPage: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
  };
}
