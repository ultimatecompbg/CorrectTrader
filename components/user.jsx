import React from "react";
import { withRouter } from "react-router";

function User({ user, avatar }) {
  console.log(user);
  return (
    <div className="card company">
      <div className="card-image">
        <figure className="image is-1by1 ">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt={user}
            className="company-image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{user}</p>
          <p className="subtitle is-6">Your profile!</p>
        </div>
      </div>
    </div>
  );
}

export default User;
