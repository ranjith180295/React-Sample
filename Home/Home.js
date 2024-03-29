import React from "react";
import { render } from "react-dom";
import LstData from "../AddEdit/List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  componentDidMount() {
    this.setState({
      userName: localStorage.getItem("user")
    });
  }

  render() {
    return (
      <div>
        <h1> Hi User {this.state.userName}, </h1>

        <p>
          <Link to="/">Logout</Link>
        </p>

        <div>
          <LstData />
        </div>
      </div>
    );
  }
}

export default Home;
