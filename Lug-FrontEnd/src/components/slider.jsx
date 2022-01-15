// import playerImage from "../images/player.jpg";
import godOfWarImage from "../images/godofwar.jpg";
// import codImage from "../images/cod.jpg";
import "./css components/slider.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        id="carouselExampleFade"
        className="carousel slide carousel-fade mb-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/originals/e0/5b/3e/e05b3eebb928fc0925d77a43f341840f.jpg
              "
              className="d-block "
              style={{ height: "70vh", width: "100vw" }}
              alt="..."
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-white text-capitalize">join us</h3>
              <p>make sure you get the latest level-up's news!!</p>
              <Link to="/">
                <button className="btn btn-secondary text-dark fw-bold w-20">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={godOfWarImage}
              className="d-block "
              style={{ height: "70vh", width: "100vw" }}
              alt="..."
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-white text-capitalize">events</h3>
              <p>check out our world wide gaming events</p>
              <Link to="/">
                <button className="btn btn-secondary text-dark fw-bold w-20">
                  To Gallery
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Battlefield2042GoldEdition_DICE_Editions_S1_2560x1440-98e3508c62e4d57c1ab8c109b49016a2
              "
              className="d-block "
              style={{ height: "70vh", width: "100vw" }}
              alt="..."
            />
            <div className="carousel-caption mb-5">
              <h3 className="text-white text-capitalize">
                games & accessories
              </h3>
              <p>check out our latest games and gaming features</p>
              <Link to="/">
                <button className="btn btn-secondary text-dark fw-bold w-20">
                  To Store
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <i className="bi bi-caret-left display-3"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <i className="bi bi-caret-right display-3"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </motion.div>
    </>
  );
};

export default Slider;
