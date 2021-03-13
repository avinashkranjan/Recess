export default function styles(theme) {
  return {
    post: {
      width: "100%",
      color: "var(--primary-text-color)",
      borderBottom: "1px solid var(--border-color)",
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
      backgroundColor: "var(--secondary-app-color)",
      color: "var(--primary-text-color)",
      borderRadius: "7px 0 0 7px",
    },
    postCommentButton: {
      width: 60,
      outline: "none",
      border: 0,
      borderLeft: `1px solid var(--primary-text-color)`,
      backgroundColor: "var(--secondary-app-color)",
      color: "var(--primary-text-color)",
      borderRadius: "0 7px 7px 0",
    },
    viewPostBtn: {
      display: "block",
      width: "100%",
      textAlign: "center",
      paddingTop: 10,
      margin: " 0 0 10px 0",
      color: "var(--primary-text-color)",
      borderTop: "1px solid var(--border-color)",
    },
  };
}
