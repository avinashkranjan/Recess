export default function styles(theme) {
  return {
    footer: {
      position: "absolute",
      margin: "auto",
      left: 0,
      bottom: 0,
      height: 55,
      width: "100%",
      borderTop: "1px solid " + theme.palette.secondary.dark,
      overflow: "hidden",
    },
  };
}
