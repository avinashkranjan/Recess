export default function styles(theme) {
  return {
    post: {
      width: "100%",
      color: theme.palette.text.primary,
      border: "1px solid " + theme.palette.secondary.dark,
      borderRadius: "4px",
      margin: "4px 4px 20px 4px",
    },
    username: {
      margin: "auto 0",
    },
    postHeader: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      borderRadius: "4px 4px 0px 0px",
      gridGap: 10,
      padding: "10px ",
      backgroundColor: theme.palette.secondary.dark,
    },
    postImageHolder: {
      margin: "auto",
      display: "flex",
      height: "fit-content",
      width: "100%",
    },
    postImage: {
      margin: "auto",
      background: "cover",
    },
    postText: {
      padding: "5px 10px 5px 10px",
    },
    postComments: {
      padding: 10,
    },
    showComments: {
      padding: "5px 10px 5px 10px",
      color: "gray",
      cursor: "pointer",
    },
    showCommentsHover: {
      padding: "5px 10px 5px 10px",
      color: "var(--text-color)",
      cursor: "pointer",
    },
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

      borderRadius: "7px 0px 0px 7px",
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
    viewPostBtn: {
      display: "block",
      width: "100%",
      textAlign: "center",
      paddingTop: 10,
      margin: " 0 0 10px 0",
      color: theme.palette.text.primary,
      borderTop: "1px solid " + theme.palette.secondary.dark,
    },
  };
}
