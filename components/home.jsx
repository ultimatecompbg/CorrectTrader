import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './Apply.jsx';
import * as serviceWorker from '../serviceWorker';
import '../styles/bulmaswatch.min.css';
import '../index.css'

class RandomCompany extends React.Component {
	state = {
		companies: []
	};
	
	
	componentDidMount () {
		fetch('http://localhost:80/correctsaler/src/backend/mysqltoform.php')
	  .then(res => res.json())
	  .then((companyinfo) => {
		console.log('Request succeeded with JSON response', companyinfo);
		this.setState ({
			companies: companyinfo
		/*	location: companayinfo[0].Location,
			companyname: companyinfo[0].CompanyName,
			description: companyinfo[0].Description,
			imagelink: companyinfo[0].ImageLink,
			category: companyinfo[0].Category,
			stars: companyinfo[0].stars
			*/
		});
	  })
	  .catch(function (error) {
		console.log('Request failed', error);
	  });
	}
	render() {
		return (
		 <div style={{
			 display: 'flex',
			 flexDirection: 'row'
		 }}>
			{
			this.state.companies.map((company, i) =>(<Company key={i} location={company.Location} companyname={company.CompanyName} description={company.Description} imagelink={company.ImageLink} category={company.Category} stars={company.stars} /> ))
			}
		 </div>
		);
	}
	
	}
	
	function Company({location, companyname, category,  description, imagelink, stars}) {
		
		 return (

		 
		 <div className="card" >
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={imagelink} alt="Placeholder image" width="256"/>
    </figure>
  </div>
  <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{companyname}</p>
        <p className="subtitle is-6">{description}</p>
      </div>
    </div>
	<div className="content">
		 Location: {location}
		 Category: {category} <br></br>
		 	 Stars: {stars} <br></br>
		</div>	 


</div>	
		 

		);
	}


export default RandomCompany;