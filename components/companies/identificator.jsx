import React from "react";
import ReactDOM from "react-dom";
import SendData from "./Apply.jsx";
import * as serviceWorker from "../../serviceWorker";
import "../../styles/bulmaswatch.min.css";
import "../../styles/index.css";
import Company from "./company";

class SpecificCompany extends React.Component {
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
    fetch("http://localhost:80/correctsaler/src/backend/addstars.php", {
      method: "post",
      body: JSON.stringify({
        companyname: this.state.companyname,
        stars: this.state.starsToBeGiven
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Request succeeded with JSON response", data);
        this.setState(prevState => ({
          stars: data,
          rates: +prevState.rates + 1
        }));
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
          <Company
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
            <h1 className="title">Vote:</h1>
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.starsToBeGiven === "1"}
                onChange={this.handleChange}
                name="starsToBeGiven"
              />
              <strong>1 STAR</strong>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.starsToBeGiven === "2"}
                onChange={this.handleChange}
                name="starsToBeGiven"
              />
              <strong>2 STARS</strong>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="3"
                checked={this.state.starsToBeGiven === "3"}
                onChange={this.handleChange}
                name="starsToBeGiven"
              />
              <strong>3 STARS</strong>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="4"
                checked={this.state.starsToBeGiven === "4"}
                onChange={this.handleChange}
                name="starsToBeGiven"
              />
              <strong>4 STARS</strong>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="5"
                checked={this.state.starsToBeGiven === "5"}
                onChange={this.handleChange}
                name="starsToBeGiven"
              />
              <strong>5 STARS</strong>
            </label>
            <br />
            <input
              className="button is-primary"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SpecificCompany;
