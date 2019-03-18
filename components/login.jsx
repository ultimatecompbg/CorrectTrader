import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class Login extends React.Component {
  state = {
    user: "",
    password: "",
    redirect: false
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
        if (data !== "") {
          this.props.toggleAuth(data);
          this.props.history.replace("/");
        } else {
          Swal.fire("Wrong credentials! Please try again!");
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
      <section className="hero is-primary">
        <div className="hero-body">
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
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
