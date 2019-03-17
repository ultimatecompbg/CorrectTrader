import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './App';
import RandomCompany from './home.jsx'
import Register from './register.jsx'
import Login from './login.jsx'
import * as serviceWorker from './serviceWorker';
import './styles/bulmaswatch.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function Navigation() {
	return(
<Router>
<div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/apply.jsx">Apply</Link></li>
	<li><Link to="/register.jsx">Register</Link></li>
	<li><Link to="/login.jsx">Login</Link></li>
  </ul>
  <Route exact path="/" component={RandomCompany} />
  <Route path="/apply.jsx" component={SendData} />
  <Route path="/register.jsx" component={Register} />
  <Route path="/login.jsx" component={Login} />
</div>
</Router>
);
}
export default Navigation;