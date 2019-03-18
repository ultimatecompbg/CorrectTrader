import React from "react";
import SendData from "./Apply.jsx";
import Catalog from "./catalog.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Home from "./home.jsx";
import Contact from "./contact.jsx";
import SpecificCompany from "./identificator.jsx";
import "../styles/bulmaswatch.min.css";
import "../index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function Navigation() {
  const [auth, setAuth] = React.useState("");

  const toggleAuth = val => {
    setAuth(val);
  };

  return (
    <Router>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              CorrectSaler
            </Link>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {auth === "User" || auth === "Admin" ? (
                <Link className="navbar-item" to="/apply">
                  Apply
                </Link>
              ) : null}
              {auth === "Admin" ? (
                <Link className="navbar-item" to="/admin">
                  Admin Panel
                </Link>
              ) : null}

              {/* <Link className="navbar-item" to="/identificator">
                  Identificator
                </Link> */}

              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/catalog">
                Search
              </Link>

              <hr className="navbar-divider" />
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  {auth === "" && (
                    <Link className="button is-primary" to="/register">
                      Register
                    </Link>
                  )}
                  {auth === "" && (
                    <Link className="button is-light" to="/login">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/" component={Home} />

          {auth === "User" || auth === "Admin" ? (
            <Route path="/apply" component={SendData} />
          ) : null}
          {auth === "Admin" ? (
            <Route path="/admin" component={SendData} />
          ) : null}
          <Route path="/register" component={Register} />
          {auth === "" && (
            <Route
              path="/login"
              render={() => <Login toggleAuth={toggleAuth} />}
            />
          )}
          <Route path="/contact" component={Contact} />
          <Route
            path="/identificator/:companyName"
            component={SpecificCompany}
          />
        </div>
      </div>
    </Router>
  );
}
export default Navigation;
