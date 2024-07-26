import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log('checkk constructor: 1');
    super(props)
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> componentDidMout")
    setTimeout(() => {
      document.title ='title';
    }, 3000)
  }

  componentDidUpdate(prevProp) {
    console.log('>>> component Did Update, prevProp', prevProp)
    console.log('>>> component Did Update, thisPro', this.props)

    if(prevProp.listUser !== this.props.listUser) {
      if(this.props.listUser.length === 5) {
        alert('You got 5 users')
      }
    }
  }

  //DomEvent
  handleOnClick = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log('>>> render')
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
          <>
            {listUser.map((user) => {
              return (
                <div
                  key={user.id}
                  className={(+user.age > 18 && "red") || "green"}
                >
                  <h1> My name is {user.name}</h1>
                  <h3> and my age is {user.age}</h3>
                  <hr />
                  <button
                    onClick={() => {
                      this.props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
