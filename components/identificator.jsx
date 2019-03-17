import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './Apply.jsx';
import * as serviceWorker from '../serviceWorker';
import '../styles/bulmaswatch.min.css';

class SpecificCompany extends React.Component {
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
		companyinfo.forEach(element => {
			if(element.CompanyName == "Bio Store"){
				if(element.Category == "Groceries"){
					this.setState ({
			         location: element.Location,
			         companyname: element.CompanyName,
			         description: element.Description,
			         imagelink: element.ImageLink,
			         category: element.Category
		            });
				}
			}
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
		 Image: <br></br><img src={this.state.imagelink} width="350" height="300"></img> <br></br>
		 </div>
		)
	}
	
	}


export default SpecificCompany;