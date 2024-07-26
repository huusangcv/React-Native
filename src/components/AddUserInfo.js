import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "Hữu Sang",
    address: "An Giang",
    age: 21
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    return event.target.value;
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    return event.target.value;
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUserInfo({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My First Component My name is {this.state.name}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Name</label>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.name}
          />
          <br />
          <label>AGe</label>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
            value={this.state.age}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfo;
