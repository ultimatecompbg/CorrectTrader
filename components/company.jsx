import React from 'react';
import '../styles/bulmaswatch.min.css';


function Company({location, companyname, category,  description, imagelink, stars}) {
		
		 return (
		 
		 
		 <div classNameName="card">
  <div classNameName="card-image">
    <figure classNameName="image is-4by3">
      <img src={imagelink} alt="Placeholder image" width="256"/>
    </figure>
  </div>
  <div classNameName="card-content">
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
	
	
	export default Company;