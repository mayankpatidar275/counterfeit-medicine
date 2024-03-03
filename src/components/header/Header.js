import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "" }}>
          <Toolbar> 
            <a style={{textDecoration: "none", color: "inherit"}} href="/">
            <Typography variant="h6" className={classes.title}>
              ANTI-COUNTERFEIT
            </Typography> 
            </a>
          </Toolbar>
        </AppBar>
      </div> 
    </div>
  );
}
export default Header;
