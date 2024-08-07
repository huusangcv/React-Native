import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
const HomePage = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);

    console.log("checkkkk", isAuthenticated, account);
    return (
        <div className="homepage">
            <div className="homepage-container">
                <video autoPlay muted loop className="video-homepage">
                    <source src={videoHomepage} type="video/mp4" />
                </video>
                <div className="homepage-hero">
                    <div className="container">
                        <div className="homepage-hero__content">
                            <h1 className="homepage__title">
                                Make forms <br /> worth filling out
                            </h1>
                            <p className="homepage__desc">
                                Get more data—like signups, feedback, and
                                anything else—with <br />
                                forms designed to be{" "}
                                <span>refreshingly different.</span>
                            </p>
                            <button className="btn-signup">
                                Get started—it's free
                            </button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
