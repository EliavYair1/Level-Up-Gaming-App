import "./css components/events.css";
import smokeVideo from "../eventVid/smoke.mp4";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Events = () => {
  // ------------------- Winter section -------------------
  const eventSignUpWinter = () => {
    return toast.dark("You Signed Up To Our Winter Event⛄", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // ------------------- Summer section -------------------
  const eventSignUpSummer = () => {
    return toast.success("You Signed Up To Summer Event 🏄‍♀️", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="container-fluid events">
        <section className="title-section">
          <video
            src={smokeVideo}
            autoPlay
            loop
            muted
            height="400"
            width="-600"
          ></video>
          <h1 className="title-h1 ms-1 ">
            <span className="title-span">W</span>
            <span className="title-span">E</span>
            <span className="title-span">L</span>
            <span className="title-span">C</span>
            <span className="title-span">O</span>
            <span className="title-span">M</span>
            <span className="title-span">E</span>
          </h1>
        </section>
      </div>

      <div className="container-fluid main-top">
        <h2 className="main-title">Premium Users Only</h2>
      </div>
      <div className="main-content">
        <div className="winter-event">
          <br />
          <br />
          <br />
          <br />
          <h1 className="winter-event-title text-center  display-3">
            Winter Event By Level-Up Gaming
          </h1>
          <div className="row text-left winter-event-row flex-xl-wrap   justify-content-center ">
            <div
              className="col-6 col-sm-10 col-xl-6 d-flex
 justify-content-center  winter-event-left mt-5 ms-5  "
            ></div>
            <div
              className="col-5 col-sm-10 col-xl-5 d-flex
 justify-content-md-center
  winter-event-right mt-5 ms-2"
            >
              <ul className=" display-5 text-light mt-3 ">
                <li className="mb-3  display-6">Over 30 Gaming Stations</li>
                <li className="mt-3 display-6">Prizes For Top Players</li>
                <li className="mt-3 display-6">Trivia Game with Prizes</li>
                <li className="mt-3 display-6">Meet Leading Developers</li>
                <li className="mt-3 display-6">Special God OF War Trailer</li>
                <li className="mt-3 display-6">Free Food And Drinks</li>
              </ul>
            </div>
          </div>
          <div className="winter-event-down text-center">
            <h1 className=" col-10 col-lg-8 text-center display-4 text-light winter-event-down-h1">
              God Of War Ragnarok See You There
            </h1>
            <Link
              to="/"
              className="btn btn-outline-light btn-lg mb-5 "
              onClick={() => eventSignUpWinter()}
            >
              Sign Up To Event
            </Link>
          </div>
        </div>
      </div>
      <div className="summer-event">
        <div className="row text-center">
          <h1 className="summer-event-title   text-center  display-3 ">
            Summer Event By Level-Up Gaming
          </h1>
        </div>
        <div className="row text-left d-flex  justify-content-center summer-event-row ">
          <div
            className="col-5 col-sm-10 col-xl-6 d-flex
 justify-content-center  mt-5 ms-5 summer-event-left order-lg-last  order-sm-last  order-md-last "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="4000"
          >
            <ul className=" display-5  text-left mt-3  ">
              <li className="mb-3  display-6 summer-event-li">
                Over 30 Gaming Stations
              </li>
              <li className="mt-3 display-6 summer-event-li">
                Prizes For Top Players
              </li>
              <li className="mt-3 display-6 summer-event-li">
                Trivia Game with Prizes
              </li>
              <li className="mt-3 display-6 summer-event-li">
                Meet Leading Developers
              </li>
              <li className="mt-3 display-6 summer-event-li">
                Special God OF War Trailer
              </li>
              <li className="mt-3 display-6 summer-event-li">
                Free Food And Drinks
              </li>
            </ul>
          </div>
          <div
            className="col-6 col-sm-10 col-xl-5 d-flex
 justify-content-md-center
   mt-5 ms-5 summer-event-right order-lg-first order-md-first order-sm-first"
          ></div>
        </div>
      </div>

      <div className="summer-event-down text-center mt-5 ">
        <h1 className=" col-10 col-lg-8 display-3  summer-event-down-h1 ">
          35th - Super Mario Bros
        </h1>
        <Link
          to="/"
          className="mb-5 summer-event-btn "
          onClick={() => eventSignUpSummer()}
        >
          Sign Up To Event
        </Link>
      </div>
      <div className="event-card">
        <h1 className=" text-center  display-3 text-primary">
          {" "}
          Upcoming Events
        </h1>
        <div className="container px-4 py-5" id="custom-cards">
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{
                  backgroundImage:
                    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4LjCyVxeiyWYKpXOkh4Ux9JxpFFeuV9-tVQ8AR42RhhTJWFgZspZo6ZXL-mI_HD3C6I&usqp=CAU")',
                  backgroundSize: "cover",
                }}
              >
                <div className="d-flex flex-column h-100 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-success event-bottom-card  text-center ">
                    Xbox -Events
                  </h2>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{
                  backgroundImage:
                    'url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_02/1864536/170113-nintendo-switch-mn-1515.jpg")',
                  backgroundSize: "cover",
                }}
              >
                <div className="d-flex flex-column h-100  pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold  text-danger event-bottom-card text-center">
                    Nintendo - Events
                  </h2>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{
                  backgroundImage:
                    'url("data:image/jpeg;base64,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")',
                  backgroundSize: "cover",
                }}
              >
                <div className="d-flex flex-column h-100  pb-3 text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-primary event-bottom-card text-center">
                    Playstation - Events
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
