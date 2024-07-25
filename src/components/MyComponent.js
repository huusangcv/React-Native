import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUser: [
      {
        id: 1,
        name: "Hữu Sang",
        age: 12,
      },
      {
        id: 2,
        name: "Blues Nam",
        age: 21,
      },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
