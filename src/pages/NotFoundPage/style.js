export default function styles(theme) {
  return {
    notFoundPage: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexFlow: "column wrap",
    },
    notFoundArt: {
      width: "80%",
    },
    notFoundText: {
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  };
}
