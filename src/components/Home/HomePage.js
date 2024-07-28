import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop className="video-homepage">
        <source src={videoHomepage} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
