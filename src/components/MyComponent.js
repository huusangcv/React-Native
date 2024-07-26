import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = () => {
    const userArray = [
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
    ];
    const [listUser, setListUser] = useState(userArray);

    //DomEvent
    const handleAddNewUserInfo = (object) => {
        setListUser([object, ...listUser]);
    };

    const handleDeleteUser = (userId) => {
        let listUserNew = listUser.filter((user) => user.id !== userId);
        setListUser(listUserNew);
    };

    return (
        <div>
            <AddUserInfo handleAddNewUserInfo={handleAddNewUserInfo} />
            <DisplayInfo
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
};

export default MyComponent;
