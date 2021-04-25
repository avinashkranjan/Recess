export default function styles(theme) {
  return {
    avatar: {
			gridColumn: 1,
			gridRow: 'span 2',
			alignSelf: "center",
		},
    timestamp: {
			margin: "auto 0",
			color: "gray"
		},
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
      gridGap: "2px 10px",
			padding: "10px ",
		},
		postImageHolder: {
			margin: "auto",
			display: "flex",
			height: "fit-content",
			width: "100%",
		},
		postImage: {
			margin: "auto",
		},
		postText: {
			padding: "0 10px",
		},
		postComments: {
			padding: 10,
		},
		showComments: {
			padding: "10px",
			color: "gray",
			cursor: "pointer",
		},
		showCommentsHover: {
			padding: "10px",
			color: "var(--text-color)",
			cursor: "pointer",
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
