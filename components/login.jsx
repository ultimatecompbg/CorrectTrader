import React from "react";
import ReactDOM from "react-dom";
import SendData from "./Apply.jsx";
import * as serviceWorker from "../serviceWorker";
import "../styles/bulmaswatch.min.css";
import RandomCompany from "./home.jsx";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navigation, { AuthContext } from "./navigation.jsx";
import "../index.css";

class Login extends React.Component {
  static contextType = AuthContext;

  state = {
    user: "",
    pass: ""
  };

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:80/correctsaler/src/backend/login.php", {
      method: "post",
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data === true) {
          console.log(this.context);
          this.props.toggleAuth(true);
        }
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };
  componentDidMount() {
    fetch("http://localhost:80/correctsaler/src/backend/login.php")
      .then(res => res.json())
      .then(row => {
        console.log("Request succeeded with JSON response", row);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }
  render() {
    return (
      <form className="section" id="form" onSubmit={this.handleSubmit}>
        <label>
          <p>Username:</p>
          <input
            className="input"
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
            name="user"
          />
          <p>Password:</p>
          <input
            className="input"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
        </label>
        <br />
        <br />
        <input className="button is-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
