import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return "Sem artigos";

  return isLoading ? (
    <CircularProgress
      id="loading"
      style={{
        width: "40%",
        height: "auto",
        margin: "60px",
      }}
    />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={6}
      id="loading"
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
