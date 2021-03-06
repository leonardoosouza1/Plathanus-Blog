import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    margin: "30px 0",
    backgroundColor: "transparent",
    boxShadow: "1px 1px 1px 1px transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: "20px",
  },
  userName: {
    display: "flex",
    marginLeft: "8px",
    alignItems: "center",
    textAlign: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "#00db7d",
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
