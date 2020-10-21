import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "27ch",
    },
  },
  btn: {
    margin: "10px 0px 10px 0px",
    width: "260px",
    height: "50px",
  },
}));

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); //this stops the refresh!!!
    //do the login logic..

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //loggin in redirect to homepage.
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login_container">
      <div className="login_title">
        <h2>Login</h2>
      </div>
      <div className="login_form">
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={classes.root}
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={classes.root}
            type="password"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={login}
            type="submit"
            className={classes.btn}
          >
            Login
          </Button>
        </form>
      </div>
      <div className="login_confirmation">
        <p>
          By signing-in you agree to Infinet's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
      <div className="signup_btn">
        <Button
          color="primary"
          onClick={register}
          className="login__registerButton"
        >
          Create your Infinet TODO Account
        </Button>
      </div>
    </div>
  );
}

export default Login;
