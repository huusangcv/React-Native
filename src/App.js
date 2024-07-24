import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent.js";
import React from "react";

class App extends React.Component {
  state = {
    name: "Hữu Sang",
    address: "An Giang",
  };

  constructor(props) {
    super(props);
    this.hadleOnMouseOver = this.hadleOnMouseOver.bind(this);
  }

  hadleOnMouseOver() {
    console.log("State: ", this.state.name);
  }

  render() {
    return (
      <div>
        My name is {this.state.name}
        <button onMouseOver={this.hadleOnMouseOver}>Click me!</button>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World 123</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };
