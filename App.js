import React from "react";
import ReactDOM from "react-dom";

class SendData extends React.Component {
  state = {
    companyname: "",
    location: "",
    description: "",
    imagelink: "",
    category: ""
  };

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("http://localhost:80/correctsaler/src/backend/mysql.php", {
      method: "post",
      body: JSON.stringify({
        companyname: this.state.companyname,
        location: this.state.location,
        description: this.state.description,
        imagelink: this.state.imagelink,
        category: this.state.category
      })
    })
      .then(res => res.json())
      .then(function(data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };
  componentDidMount() {}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Location:</p>
          <input
            type="text"
            value={this.state.locаtion}
            onChange={this.handleChange}
            name="location"
          />
          <p>Company Name:</p>
          <input
            type="text"
            value={this.state.companyname}
            onChange={this.handleChange}
            name="companyname"
          />
          <p>Description:</p>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
          />
          <p>Image Link:</p>
          <input
            type="text"
            value={this.state.imagelink}
            onChange={this.handleChange}
            name="imagelink"
          />
          <p>Category:</p>
          <input
            type="radio"
            value="Restaurants"
            checked={this.state.category === "Groceries"}
            onChange={this.handleChange}
            name="category"
          />
          Groceries
          <input
            type="radio"
            value="Restaurants"
            checked={this.state.category === "Restaurants"}
            onChange={this.handleChange}
            name="category"
          />
          Restaurants
          <input
            type="radio"
            value="Finances"
            checked={this.state.category === "Finances"}
            onChange={this.handleChange}
            name="category"
          />
          Finances
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function Apply() {
  return (
    <div className="App">
      <SendData />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Apply />, rootElement);

export default SendData;
