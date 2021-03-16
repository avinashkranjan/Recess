export default function styles(theme) {
  return {
    "@global": {
      "*": {
        margin: 0,
        fontFamily: "Poppins, sans-serif",
        textDecoration: "none",
        boxSizing: "border-box",
      },
      "*::-webkit-scrollbar": {
        appearance: "none",
        width: 10,
        backgroundColor: theme.palette.primary.main,
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  };
}
