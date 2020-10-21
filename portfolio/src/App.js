import React from "react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Nav />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
