import React from "react";
import "../../styles/bulmaswatch.min.css";
import Swal from "sweetalert2";

class Register extends React.Component {
  state = {
    user: "",
    pass: "",
    avatar: "",
    repeatPass: ""
  };

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = event => {
    if (this.state.pass !== this.state.repeatPass) {
      Swal.fire("Passwords don't match, please try again!");
    }

    event.preventDefault();
    fetch("http://localhost:80/correctsaler/src/backend/register.php", {
      method: "post",
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.pass,
        avatar: this.state.avatar
      })
    })
      .then(res => res.json())
      .then(function(data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };

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
                name="pass"
              />
              <p>Repeat Password:</p>
              <input
                className="input"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="repeatPass"
              />
              <p>Avatar:</p>
              <input
                className="input"
                type="text"
                value={this.state.avatar}
                onChange={this.handleChange}
                name="avatar"
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

export default Register;
