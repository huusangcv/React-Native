import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUsers";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };

    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const resetUpdateData = () => {
        setDataUpdate({});
    };
    return (
        <div className="manage-user-container">
            <div className="title h1 text-center">Manage User</div>
            <div className="users-content">
                <div>
                    <button
                        onClick={() => setShowModalCreateUser(true)}
                        className="btn btn-primary d-flex align-items-center gap-2"
                    >
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div>
                    <TableUser
                        listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    );
};

export default ManageUser;
