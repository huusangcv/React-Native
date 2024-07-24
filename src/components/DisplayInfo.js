import React from "react";
import UserInfo from "./UserInfo";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <p>Age {this.props.age}</p>
      </div>
    );
  }
}

export default DisplayInfo;
