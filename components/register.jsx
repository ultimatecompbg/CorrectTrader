import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './Apply.jsx';
import * as serviceWorker from '../serviceWorker';
import '../styles/bulmaswatch.min.css';
import RandomCompany from './home.jsx'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation.jsx';

class Register extends React.Component {
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
        fetch('http://localhost:80/correctsaler/src/backend/register.php', {
		method: 'post',
		body: JSON.stringify({
		user: this.state.user,
		password: this.state.password
		})
	  })
	  .then(res => res.json())
	  .then(function (data) {
		console.log('Request succeeded with JSON response', data);
	  })
	  .catch(function (error) {
		console.log('Request failed', error);
	  });
	  };
	   componentDidMount() {
			
			
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
			<input type="submit" value="Submit" />
		  </form>
		);

	  }
	 
	}

export default Register;