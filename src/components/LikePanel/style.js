export default function styles(theme) {
  return {
    likeContainer: {
      display: "flex",
      alignItems: "center",
      padding: "0.3rem 0",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3, 1),
    },
    likelist: {
      overflowY: "scroll",
      maxHeight: "60vh",
      paddingRight: "2rem",
    },
    likeCounter: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
}
