import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: "Hữu Sang",
//         address: "An Giang",
//         age: 21,
//     };

//     handleOnChange = (event) => {
//         this.setState({
//             name: event.target.value,
//         });
//         return event.target.value;
//     };

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         });
//         return event.target.value;
//     };

//     handleOnSubmit = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUserInfo({
//             id: Math.floor(Math.random() * 100 + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 My First Component My name is {this.state.name}
//                 <form
//                     onSubmit={(event) => this.handleOnSubmit(event)}
//                     className="form"
//                     id="form-1"
//                 >
//                     <div className="form-group">
//                         <label for="fullname" className="form-label">
//                             Tên đầy đủ
//                         </label>
//                         <input
//                             id="fullname"
//                             name="fullname"
//                             type="text"
//                             placeholder="VD: Sơn Đặng"
//                             className="form-control"
//                             onChange={(event) => this.handleOnChange(event)}
//                             value={this.state.name}
//                         />
//                         <span className="form-message"></span>
//                     </div>
//                     <br />

//                     <div className="form-group">
//                         <label for="fullname" className="form-label">
//                             Tuổi
//                         </label>
//                         <input
//                             id="fullname"
//                             name="fullname"
//                             type="text"
//                             placeholder="VD: 21"
//                             className="form-control"
//                             onChange={(event) => this.handleOnChangeAge(event)}
//                             value={this.state.age}
//                         />
//                         <span className="form-message"></span>
//                     </div>
//                     <button className="form-submit">Đăng ký</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("An Giang");
    const [age, setAge] = useState("");

    const handleOnChange = (event) => {
        setName(event.target.value);
        return event.target.value;
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
        return event.target.value;
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUserInfo({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: name,
            age: age,
        });
    };
    return (
        <div>
            <div>
                <marquee> My name is {name}</marquee>
            </div>
            <form
                onSubmit={(event) => handleOnSubmit(event)}
                className="form"
                id="form-1"
            >
                <div className="form-group">
                    <label htmlFor="fullname" className="form-label">
                        Tên đầy đủ
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="VD: Sơn Đặng"
                        className="form-control"
                        onChange={(event) => handleOnChange(event)}
                        value={name}
                    />
                    <span className="form-message"></span>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="fullname" className="form-label">
                        Tuổi
                    </label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="VD: 21"
                        className="form-control"
                        onChange={(event) => handleOnChangeAge(event)}
                        value={age}
                    />
                    <span className="form-message"></span>
                </div>
                <button className="form-submit">Đăng ký</button>
            </form>
        </div>
    );
};
export default AddUserInfo;
