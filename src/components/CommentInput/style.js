export default function styles(theme) {
  return {
    postCommentBox: {
      padding: "0 10px 10px 10px",
      margin: "10px 0 0 0",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      width: "100%",
      position: "relative",
    },
    postCommentInput: {
      outline: "none",
      border: 0,
      padding: "10px",
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
    },
    emojiPicker: {
      width: 60,
      outline: "none",
      border: 0,
      borderRight: "1px solid " + theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.primary,

      borderRadius: "4px 0px 0px 4px",
    },
    postCommentButton: {
      width: 60,
      outline: "none",
      border: 0,
      borderLeft: "1px solid " + theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
      borderRadius: "0 4px 4px 0",
    },
  };
}
