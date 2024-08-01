import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUsers";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
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
                    <TableUser />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    );
};

export default ManageUser;
