export default function styles(theme) {
  return {
    text: {
      color: theme.palette.text.secondary,
    },
    uploadPage: {
      overflow: "none",
      width: "100%",
    },
    input: {
      display: "none",
    },
    uploadArea: {
      height: 350,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
    caption: {
      display: "block",
      //   padding: "0 10px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
    captionInput: {
      width: "100%",
    },
    upload: {
      display: "block",
    },
    uploadBtn: {
      width: "100%",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
    progressBar: {
      backgroundColor: "transparent",
    },
    imagePreview: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  };
}
