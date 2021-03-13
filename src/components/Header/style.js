export default function styles(theme) {
  return {
    root: {
      position: "sticky",
      height: "55px",
      borderBottom: "1px solid #41506B",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid #41506B",
        borderRight: "1px solid #41506B",
      },
    },
    pageHeader: {
      padding: "0 14px",
      height: "55px",
      [theme.breakpoints.up("sm")]: {
        borderLeft: "1px solid #41506B",
      },
    },
    pageTitle: {
      fontSize: 20,
      color: "#0CB7D3",
    },
    themeChanger: {
      color: "#0CB7D3",
      marginLeft: "auto",
    },
  };
}
