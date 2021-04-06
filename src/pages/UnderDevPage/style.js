export default function styles(theme) {
  return {
    underDevPage: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexFlow: "column wrap",
    },
    underDevArt: {
      width: "80%",
      marginBottom: 14,
    },
    underDevText: {
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  };
}
