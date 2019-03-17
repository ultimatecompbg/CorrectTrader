import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './apply.jsx';
import * as serviceWorker from './serviceWorker';
import './styles/bulmaswatch.min.css';
import RandomCompany from './home.jsx'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation.jsx';

class Login extends React.Component {
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
        fetch('http://localhost:80/correctsaler/src/backend/login.php', {
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
			fetch('http://localhost:80/correctsaler/src/backend/login.php')
	  .then(res => res.json())
	  .then((status) => {
		console.log('Request succeeded with JSON response', status);
		if(status == true){
			alert("Login OK");
		}
	  })
	  .catch(function (error) {
		console.log('Request failed', error);
	  });
			
		} 
	  render() {
		return (
		  <form class="section" id="form" onSubmit={this.handleSubmit}>
			<label>
			  <p>Username:</p>
			  <input
				type="text"
				value={this.state.user}
				onChange={this.handleChange}
				name="user"
			  />
			  <p>Password:</p>
			  <input
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

export default Login;