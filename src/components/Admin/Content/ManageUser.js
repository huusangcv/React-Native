import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUsers";
import { useEffect, useState } from "react";
import {
    getAllUsers,
    getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
    const LIMIT_USER = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [dataView, setDataView] = useState({});
    const [listUser, setListUser] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        fetchListUsersWithPaninate(currentPage);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };

    const fetchListUsersWithPaninate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            console.log("res.dt =", res.DT);
            setListUser(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    };

    const handleClickButtonUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const handleClickViewUser = (user) => {
        setShowModal(true);
        setDataView(user);
    };

    const handleClickDeleteUser = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
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
                    {/* <TableUser
                        listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickViewUser={handleClickViewUser}
                        handleClickDeleteUser={handleClickDeleteUser}
                    /> */}
                    <TableUserPaginate
                        listUser={listUser}
                        handleClickButtonUpdate={handleClickButtonUpdate}
                        handleClickViewUser={handleClickViewUser}
                        handleClickDeleteUser={handleClickDeleteUser}
                        fetchListUsersWithPaninate={fetchListUsersWithPaninate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaninate={fetchListUsersWithPaninate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                    fetchListUsersWithPaninate={fetchListUsersWithPaninate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModal}
                    setShow={setShowModal}
                    dataView={dataView}
                    fetchListUsersWithPaninate={fetchListUsersWithPaninate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaninate={fetchListUsersWithPaninate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ManageUser;
