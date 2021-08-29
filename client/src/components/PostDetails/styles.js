import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "300px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    width: "100%",

    alignItems: "center",
    borderRadius: "20px",
    flex: 1,
  },
  imageSection: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "36px",
    paddingBottom: "36px",
    borderBottom: "1px solid #ddd",
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  break: {
    display: "flex",
    wordWrap: "break-work",
  },

  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
  },
}));
