import React from "react";
import Company from "./company";
import { withRouter } from "react-router";

class RandomCompany extends React.Component {
  state = {
    companies: []
  };

  componentDidMount() {
    fetch("http://localhost:80/correctsaler/src/backend/mysqltoform.php")
      .then(res => res.json())
      .then(companies => {
        console.log("Request succeeded with JSON response", companies);
        this.setState({
          companies: companies
        });
      })

      .catch(function(error) {
        console.log("Request failed", error);
      });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        {this.state.companies.map((company, i) => {
          return (
            <Company
              key={i}
              location={company.Location}
              companyname={company.CompanyName}
              description={company.Description}
              imagelink={company.ImageLink}
              category={company.Category}
              stars={company.stars}
              rates={company.rates}
              history={this.props.history}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(RandomCompany);
