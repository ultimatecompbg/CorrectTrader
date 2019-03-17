import React from 'react';

export default () => (
	<section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Contact us!
      </h1>
      <h2 className="subtitle">
     Email: <input className="input" type="text" /><br />
	  First Name:<input className="input" type="text"/><br />
	Second Name:  <input className="input" type="text"/><br />
	Your message:  <input className="input" type="text"/><br />
	
	<input type="submit" className="button is-primary" value="Submit" />

      </h2>
    </div>
  </div>
</section>
)