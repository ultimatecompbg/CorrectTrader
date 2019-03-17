import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './apply.jsx';
import * as serviceWorker from './serviceWorker';
import './styles/bulmaswatch.min.css';

class RandomCompany extends React.Component {
	state = {
		location: '',
		companyname: '',
		description: '',
		imagelink: '',
		category: ''
	}
	
	
	componentDidMount () {
		fetch('http://localhost:80/correctsaler/src/backend/mysqltoform.php')
	  .then(res => res.json())
	  .then((companyinfo) => {
		console.log('Request succeeded with JSON response', companyinfo);
		this.setState ({
			location: companyinfo[0].Location,
			companyname: companyinfo[0].CompanyName,
			description: companyinfo[0].Description,
			imagelink: companyinfo[0].ImageIink,
			category: companyinfo[0].Category
		});
	  })
	  .catch(function (error) {
		console.log('Request failed', error);
	  });
	}
	render() {
		return (
		 <div>
		 Location: {this.state.location} <br></br>
		 Company Name: {this.state.companyname} <br></br>
		 Category: {this.state.category} <br></br>
		 Description: {this.state.description} <br></br>
		 Image: <img src={this.state.imagelink}></img> <br></br>
		 </div>
		)
	}
	
	}


export default RandomCompany;