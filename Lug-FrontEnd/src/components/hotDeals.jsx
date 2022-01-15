import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//premium signup / regular signup section displayed in home component were passing user in props to check if user is logged and redirected
const HotDeals = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook,inView=", inView);

    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <>
      <div ref={ref} className="wrap-container">
        <motion.div
          animate={animation}
          transition={{
            duration: 0.7,
            type: "tween",
            stiffness: 120,
          }}
          className="pricing-header p-3 pb-md-4 mx-auto text-center text-light"
        >
          <h1 className="display-4 fw-normal ">Exclusive Deals</h1>
          <p className="fs-5 text-light">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </motion.div>
      </div>
      <div ref={ref} className="container">
        <motion.div
          animate={animation}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
          className="row row-cols-1 row-cols-md-3 mb-3 text-center"
        >
          <div className="col-12 col-xl-6 col-md-6">
            <div className="card mb-4 rounded-3 shadow-sm upper-card bg-dark">
              <div className="card-header py-3 bg-secondary">
                <h4 className="my-0 fw-normal text-light text-capitalize">
                  Premium sign up
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title text-light">
                  $59
                  <small className="text-muted fw-light text-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 text-light ">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-secondary"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-md-6">
            <div className="card mb-4 rounded-3 shadow-sm bottom-card">
              <div className="card-header py-3 text-white bg-dark">
                <h4 className="my-0 fw-normal text-capitalize">sign up</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title ">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-dark"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HotDeals;
