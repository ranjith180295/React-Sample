import React, { Component } from "react";
import { render } from "react-dom";
import LoginCom from "./LogIn/LogIn";
import Home from "./Home/Home";
import MaterialTestCom from "./MaterialTesting/MaterialTest";

import MaterialDesignCom from "./MaterialTesting/MaterialDesign";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/Home" exact component={Home} />
            <Route path="/MaterialTesting" exact component={MaterialTestCom} />
            <Route path="/MaterialDesign" exact component={MaterialDesignCom} />
            <Route path="/" exact component={LoginCom} />
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
