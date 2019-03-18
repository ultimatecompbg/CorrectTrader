import React from "react";

export default () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <h1 className="title">Contact us!</h1>
      Email: <input className="input" type="text" />
      <br />
      First Name:
      <input className="input" type="text" />
      <br />
      Second Name: <input className="input" type="text" />
      <br />
      Your message: <input className="input" type="text" />
      <br />
      <br />
      <input type="submit" className="button is-primary" value="Submit" />
    </div>
  </section>
);
