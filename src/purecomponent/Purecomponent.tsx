import React, { Component, PureComponent } from "react";

class Purecomponent extends PureComponent {
  state = {
    cityname: "patna",
  };

  changecity = () => {
    this.setState({ cityname: this.state.cityname });
  };
  render() {
    console.log(this.state.cityname, "cityname");
    return (
      <>
        <div style={{ width: "50%", margin: "10px auto" }}>
          <button
            onClick={this.changecity}
            style={{ padding: "10px 20px", backgroundColor: "green" }}
          >
            ChangeName
          </button>
          <h2>{this.state.cityname}</h2>
        </div>
      </>
    );
  }
}
export default Purecomponent;
