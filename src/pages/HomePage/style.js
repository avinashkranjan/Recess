export default function styles(theme) {
	return {
		modal: {
			margin: "auto",
			width: "975px",
			maxHeight: "600px",
			// transform: "translateY(15%)",
		},
		modalContainer: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.text.primary,
			border: "1px solid " + theme.palette.background,
			width: "975px",
			height: "600px",
			maxHeight: "600px",
		},
		modalHeader: {
			width: "100%",
			height: "50px",
			padding: "15px 20px",
		},
		modalUsername: {
			display: "inline-block",
			height: "50px",
			width: "100%",
			fontSize: "20px",
		},
		closeModal: {
			position: "fixed",
			top: "1.5rem",
			right: "1.5rem",
			cursor: "pointer",
		},
		modalMain: {
			display: "flex",
			alignItem: "stretch",
			flexDirection: "row",
			height: "100%",
			padding: "0 15px 10px 15px",
		},
		postImageHolder: {
			margin: "auto",
			display: "flex",
			height: "fit-content",
			width: "100%",
		},
		postImageContainer: {
			boxSizing: "border-box",
			flex: "55%",
			maxHeight: "500px",
			maxWidth: "100%",
			margin: "auto",
		},
		postImage: {
			boxSizing: "border-box",
			flex: "55%",
			display: "inline-block",
			maxHeight: "500px",
			maxWidth: "100%",
			backgroundColor: "black",
			margin: "auto",
		},
		commentContainer: {
			flex: "45%",
			maxHeight: "500px",
			overflow: "auto",
			backgroundColor: theme.palette.secondary.dark,
		},
		postComments: {
			padding: "20px",
		},
	};
}
