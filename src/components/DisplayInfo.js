import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  //DomEvent
  handleOnClick = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    const { listUser } = this.props;
    return (
      <div>
        <h5
          onClick={() => {
            this.handleOnClick();
          }}
          className="pointUser"
        >
          {(this.state.isShowListUser === true && "Hide User List") ||
            "Show User List"}
        </h5>
        {this.state.isShowListUser && (
          <div>
            {listUser.map((user, index) => {
              return (
                <div
                  key={user.id}
                  className={(+user.age > 18 && "red") || "green"}
                >
                  <h1> My name is {user.name}</h1>
                  <h3> and my age is {user.age}</h3>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
