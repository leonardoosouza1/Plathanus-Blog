import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  searchButton: {
    backgroundColor: "#891CD4",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#610c9e",
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  loading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
