import React from "react";
import SendData from "./Apply.jsx";
import RandomCompany from "./home.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Contact from "./contact.jsx";
import SpecificCompany from "./identificator.jsx";
import "../styles/bulmaswatch.min.css";
import "../index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => {}
});

function Navigation() {
  const [auth, setAuth] = React.useState(false);

  const toggleAuth = val => {
    setAuth(val);
  };

  return (
    <AuthContext.Provider value={{ isAuth: auth, toggleAuth }}>
      <Router>
        <div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
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
                {auth !== true ? null : (
                  <Link className="navbar-item" to="/apply">
                    Apply
                  </Link>
                )}

                {/* <Link className="navbar-item" to="/identificator">
                  Identificator
                </Link> */}

                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>

                <hr className="navbar-divider" />
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <Link className="button is-primary" to="/register">
                      Register
                    </Link>
                    <Link className="button is-light" to="/login">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="container">
            <Route exact path="/" component={RandomCompany} />
            {auth !== true ? null : (
              <Route path="/apply" component={SendData} />
            )}
            <Route path="/register" component={Register} />
            <Route
              path="/login"
              render={() => <Login toggleAuth={toggleAuth} />}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/identificator/:companyName"
              component={SpecificCompany}
            />
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
export default Navigation;
