import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Hữu Sang",
    address: "An Giang",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    return event.target.value;
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My First Component My name is {this.state.name}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
