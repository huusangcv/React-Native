import React from "react";
import AddUserInfo from "./AddUserInfo";
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

  handleAddNewUserInfo = (object) => {
    this.setState({
      listUser: [object, ...this.state.listUser],
    });
  };

  //JSX
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUserInfo={this.handleAddNewUserInfo} />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
