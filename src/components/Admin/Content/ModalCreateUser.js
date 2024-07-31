import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
const ModalCreateUser = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setPreviewImage("");
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        } else {
            setPreviewImage("");
        }
    };

    const handleSubmitCreateUser = async () => {
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);
        form.append("username", username);
        form.append("role", role);
        form.append("userImage", image);

        let res = await axios.post(
            "http://localhost:8081/api/v1/participant",
            form
        );
        console.log(">>> check res", res);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} size="md" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option defaultValue value={"USER"}>
                                    User
                                </option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label
                                className="form-label lable-file-upload"
                                htmlFor="uploadFile"
                            >
                                <FcPlus />
                                Upload file Image
                            </label>
                            <input
                                id="uploadFile"
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleUploadImage(e);
                                }}
                                hidden
                            />
                        </div>

                        <div className="col-md-12 img-preview">
                            {(previewImage && (
                                <img
                                    src={previewImage}
                                    className="img-thumbnail "
                                    alt="..."
                                />
                            )) || (
                                <img
                                    src="..."
                                    className="img-thumbnail "
                                    alt="..."
                                />
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitCreateUser()}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateUser;
