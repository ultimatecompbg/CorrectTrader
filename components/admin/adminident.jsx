import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../../serviceWorker";
import "../../styles/bulmaswatch.min.css";
import "../../styles/index.css";
import AdminCompany from "./admincomp";

class AdmSpecificCompany extends React.Component {
  state = {
    location: "",
    companyname: "",
    description: "",
    imagelink: "",
    category: "",
    stars: "",
    rates: "",
    starsToBeGiven: "5"
  };
  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;

    console.log(key, value);

    this.setState(
      {
        [key]: value
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("http://localhost:80/correctsaler/src/backend/editcompany.php", {
      method: "post",
      body: JSON.stringify({
        location: this.state.location,
        companyname: this.state.companyname,
        description: this.state.description,
        imagelink: this.state.imagelink,
        category: this.state.category
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };

  componentDidMount() {
    const companyName = this.props.match.params.companyName;
    fetch("http://localhost:80/correctsaler/src/backend/mysqltoform.php")
      .then(res => res.json())
      .then(companies => {
        const index = companies.findIndex(
          element => element.CompanyName === companyName
        );
        const element = companies[index];

        this.setState({
          location: element.Location,
          companyname: element.CompanyName,
          description: element.Description,
          imagelink: element.ImageLink,
          category: element.Category,
          stars: element.stars,
          rates: element.rates
        });
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <AdminCompany
            location={this.state.location}
            companyname={this.state.companyname}
            description={this.state.description}
            imagelink={this.state.imagelink}
            category={this.state.category}
            stars={this.state.stars}
            rates={this.state.rates}
          />
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="input-wrapper"
          >
            <br />
            <h1 className="title">Edit:</h1>
            <form className="section" id="form" onSubmit={this.handleSubmit}>
              <label>
                <p>Location:</p>
                <input
                  className="input"
                  type="text"
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                />
                <p>Description:</p>
                <input
                  className="input"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange}
                  name="description"
                />
                <p>Image Link:</p>
                <input
                  className="input"
                  type="text"
                  value={this.state.imagelink}
                  onChange={this.handleChange}
                  name="imagelink"
                />
                <p>Category:</p>
                <br />
                <input
                  type="radio"
                  value="Groceries"
                  checked={this.state.category === "Groceries"}
                  onChange={this.handleChange}
                  name="category"
                />
                Groceries
                <br />
                <br />
                <input
                  type="radio"
                  value="Restaurants"
                  checked={this.state.category === "Restaurants"}
                  onChange={this.handleChange}
                  name="category"
                />
                Restaurants
                <br />
                <br />
                <input
                  type="radio"
                  value="Finances"
                  checked={this.state.category === "Finances"}
                  onChange={this.handleChange}
                  name="category"
                />
                Finances
                <br />
              </label>
              <br />
              <input
                type="submit"
                className="button is-primary"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdmSpecificCompany;
