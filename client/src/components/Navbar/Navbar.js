/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    window.location.reload();

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <h1>Plathanus Blog</h1>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Sair
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
