import logo from "./logo.svg";
import "./App.scss";
import "./lib/valid-form.css";
import "./lib/valid-form.js";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent.js";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <MyComponent></MyComponent>
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
