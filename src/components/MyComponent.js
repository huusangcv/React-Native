import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="Nam Blues" age="29"></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
