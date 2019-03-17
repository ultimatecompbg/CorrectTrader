import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './Apply.jsx';
import * as serviceWorker from '../serviceWorker';
import '../styles/bulmaswatch.min.css';
import '../index.css'
import Company from './company';

class SpecificCompany extends React.Component {
	state = {
		location: '',
		companyname: '',
		description: '',
		imagelink: '',
		category: '', 
		stars: ''
	}
	handleChange = event => {
		const key = event.target.name;
		const value = event.target.value;
		
		console.log(key, value);


		this.setState({
		  [key]: value
		}, () => console.log(this.state));
	  };

	  handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
        fetch('http://localhost:80/correctsaler/src/backend/addstars.php', {
		method: 'post',
		body: JSON.stringify({
		companyname: this.state.companyname,
        rates: '1',
		stars: this.state.stars
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
	
	componentDidMount () {
		fetch('http://localhost:80/correctsaler/src/backend/mysqltoform.php')
	  .then(res => res.json())
	  .then((companyinfo) => {
		console.log('Request succeeded with JSON response', companyinfo);
		companyinfo.forEach(element => {
			if(element.CompanyName == "EkoBioBege"){
				if(element.Category == "Groceries"){
					this.setState ({
			         location: element.Location,
			         companyname: element.CompanyName,
			         description: element.Description,
			         imagelink: element.ImageLink,
			         category: element.Category,
					 stars: element.stars
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
		
				   <section className="section">
    <div className="container">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">
       
	   <Company location={this.state.location} companyname={this.state.companyname} description={this.state.description} imagelink={this.state.imagelink} category={this.state.category} stars={this.state.stars} />
	   
      </h2>
    </div>
  </section>
		 <p>Vote:</p>
			  <input
				type="radio"
				value="1"
				checked={this.state.stars ==='1'}
				onChange={this.handleChange}
				name="stars"
			  />1 star
			  <br></br>
			  <input
				type="radio"
				value="2"
				checked={this.state.stars === '2'}
				onChange={this.handleChange}
				name="stars"
			  />2 stars
			  <br></br>
			  <input
				type="radio"
				value="3"
				checked={this.state.stars === '3'}
				onChange={this.handleChange}
				name="stars"
			  />3 stars
			  <br></br>
			  <input
				type="radio"
				value="4"
				checked={this.state.stars === '4'}
				onChange={this.handleChange}
				name="stars"
			  />4 stars
			  <br></br>
			  <input
				type="radio"
				value="5"
				checked={this.state.stars === '5'}
				onChange={this.handleChange}
				name="stars"
			  />5 stars
			  <br></br>
			  <input type="submit" value="Submit" onClick={this.handleSubmit} />
			  
		 </div>
		)
	}
	
	}


export default SpecificCompany;