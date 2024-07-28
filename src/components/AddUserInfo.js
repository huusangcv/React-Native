import React, { useState } from "react";

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
