import React from "react";
import { withRouter } from "react-router";

function AdminCompany({
  location,
  companyname,
  category,
  description,
  imagelink,
  stars,
  rates,
  history
}) {
  return (
    <div
      className="card company"
      onClick={() =>
        history !== undefined
          ? history.push(`/adminident/${companyname}`)
          : undefined
      }
    >
      <div className="card-image">
        <figure className="image is-1by1 ">
          <img src={imagelink} alt={companyname} className="company-image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{companyname}</p>
          <p className="subtitle is-6">{description}</p>
        </div>
      </div>
      <div className="content">
        Location: {location} <br />
        Category: {category} <br />
        {stars !== "0" &&
          rates !== "0" &&
          `Rating: ${(+stars / +rates).toFixed(2)}`}
        <br />
      </div>
    </div>
  );
}

export default AdminCompany;
