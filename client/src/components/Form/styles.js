import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#011763",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00db7d",
    },
  },
  buttonClean: {
    marginBottom: 10,
  },
}));
