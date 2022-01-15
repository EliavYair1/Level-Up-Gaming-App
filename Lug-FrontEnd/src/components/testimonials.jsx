import React from "react";
import "./css components/testimonials.css";
import firstImage from "../images/testimonial/1.png";
import secondImage from "../images/testimonial/2.png";
import thirdImage from "../images/testimonial/3.png";

const Testimonials = () => {
  return (
    <>
      {" "}
      <section className="testimonial-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center" data-bs-interval={3000}>
            <div className="col-md-6 testi-img">
              <div className="img-box">
                <div className="circle" />
                <div className="img-box-inner">
                  {/* Slider */}
                  <div
                    id="myCarousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                    data-bs-interval={3000}
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={firstImage}
                          className="d-block w-75 testSlider ms-5 "
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={secondImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={thirdImage}
                          className="d-block w-75 testSlider ms-5"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-interval={3000}
                data-bs-ride="carousel"
              >
                <h1 className="testi-header text-capitalized">Testimonials</h1>
                <div className="carousel-inner text-light">
                  <div className="carousel-item testi-item active">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>Ofek Abarbanel</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>Sagi Reuven</h3>
                  </div>
                  <div className="carousel-item testi-item">
                    <p className="paragraph">
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non nobis ratione, harum doloremque aspernatur aliquid
                      quaerat dolores voluptates recusandae qui repellat illum,
                      amet ipsa debitis fugiat commodi nemo suscipit ad!"
                    </p>
                    <h3>
                      huge bulbul - <span>Eliav Yair</span>
                    </h3>
                  </div>
                  <div className="btns">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-arrow-left-circle text-secondary"></i>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-arrow-right-circle text-secondary"></i>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
