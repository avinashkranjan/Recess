export default function styles(theme) {
  return {
    post: {
      width: "100%",
      color: theme.palette.text.primary,
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
    username: {
      margin: "auto 0",
    },
    postHeader: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gridGap: 10,
      padding: "10px ",
    },
    postImage: {
      width: "100%",
    },
    postText: {
      padding: "0 10px",
    },
    postComments: {
      padding: 10,
    },
    postCommentBox: {
      padding: "0 10px 10px 10px",
      margin: "10px 0 0 0",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      width: "100%",
    },
    postCommentInput: {
      outline: "none",
      border: 0,
      padding: "10px",
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
      borderRadius: "7px 0 0 7px",
    },
    postCommentButton: {
      width: 60,
      outline: "none",
      border: 0,
      borderLeft: "1px solid " + theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
      borderRadius: "0 7px 7px 0",
    },
  };
}
