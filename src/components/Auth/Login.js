import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        //submid apis
        let data = await postLogin(email.trim(), password.trim());
        console.log(data);
        if (data && +data.EC === 0) {
            dispatch(doLogin(data));
            toast.success(data.EM);
            navigate("/");
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    };
    return (
        <div className="login-container">
            <section className="bg-light p-2 p-md-3 p-xl-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                            <div className="card border border-light-subtle rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <div className="text-center mb-4">
                                                    <a
                                                        href=""
                                                        onClick={() =>
                                                            navigate("/")
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="108"
                                                            height="24"
                                                            fill="none"
                                                            className="sc-91abde0-1 bULroO"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                </div>

                                                <h4 className="text-center">
                                                    Welcome back you've been
                                                    missed!
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <form
                                        action="#!"
                                        autoComplete="off"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="name@example.com"
                                                        required
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                    <label
                                                        htmlFor="email"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                        value={password}
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></input>
                                                    <label
                                                        htmlFor="password"
                                                        className="form-label"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="remember_me"
                                                        id="remember_me"
                                                    ></input>
                                                    <label
                                                        className="form-check-label text-secondary"
                                                        htmlFor="remember_me"
                                                    >
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button
                                                        className="btn bsb-btn-xl btn-primary"
                                                        // type="submit"
                                                        onClick={() =>
                                                            handleLogin()
                                                        }
                                                    >
                                                        Log in now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle"></hr>
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                                <a
                                                    href=""
                                                    className="link-secondary text-decoration-none"
                                                    onClick={() =>
                                                        navigate("/register")
                                                    }
                                                >
                                                    Create new account
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="link-secondary text-decoration-none"
                                                >
                                                    Forgot password
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="mt-5 mb-5">
                                                Or continue with
                                            </p>
                                            <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                                                <a
                                                    href="#!"
                                                    className="btn btn-lg btn-outline-danger p-3 lh-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        fill="currentColor"
                                                        className="bi bi-google"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="btn btn-lg btn-outline-primary p-3 lh-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        fill="currentColor"
                                                        className="bi bi-facebook"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="btn btn-lg btn-outline-info p-3 lh-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        fill="currentColor"
                                                        className="bi bi-twitter"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href="#!"
                                                    className="btn btn-lg btn-outline-dark p-3 lh-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        fill="currentColor"
                                                        className="bi bi-apple"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
