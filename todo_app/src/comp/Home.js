import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Formtodo from "./Formtodo";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    margin: "20px 20px 0px 0px",
    position: "fixed",
    right: "0",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: "#002984",
    backgroundColor: "#ffffff",
  },
}));

function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav>
        <div className={classes.root}>
          <Avatar
            alt=""
            src="/static/images/avatar/1.jpg"
            onClick={handleClick}
            className={classes.large}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <Link to="/login" className="link">
              <MenuItem>Logout</MenuItem>
            </Link>
          </Menu>
        </div>
      </nav>
      <div className="hero_section">
        <div className="hero_secText">
          <h2>Welcome your To-Do List </h2>
          <h3>
            Never lose track of <span>important tasks</span> ever again
          </h3>
        </div>
      </div>
      <Formtodo />
    </div>
  );
}

export default Home;
