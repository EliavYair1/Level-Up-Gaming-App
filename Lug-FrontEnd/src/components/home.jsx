import { Link } from 'react-router-dom';
import Slider from './slider';
import { SiNintendoswitch } from 'react-icons/si';
import { FaPlaystation } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';
import { FaXbox } from 'react-icons/fa';
import Footer from './footer';
import './css components/home.css';
import Gallery from './gallery';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HotDeals from './hotDeals';
import MeetTheTeam from './MeetTheTeam';
import userService from '../services/userService';
import team from '../services/theTeam';
import Testimonials from './testimonials';

const Home = () => {
  const theTeam = team();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fetchUser = userService.isUserLogged();
  console.log(fetchUser, 'coming from fetch');
  const animation = useAnimation();
  useEffect(() => {
    console.log('use effect hook,inView=', inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 0.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView, animation]);

  return (
    <>
      <div className="home-container">
        <Slider />
        <div className="headline text-center">
          <h1 className="headline-h1 ">
            <span className="headline-span display-1">Level-Up</span>
            &nbsp;&nbsp;
            <span className="headline-span display-1">Gaming</span>
          </h1>
        </div>
        <br />
        <br />
        <HotDeals />
        <br />
        <br />
        <hr className="featurette-divider" />
        <div className="container">
          <div className="row">
            <div ref={ref} className="text-center">
              <Link to="/store/playstation" className="HLink">
                <motion.button
                  animate={animation}
                  transition={{
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className="item-one btn btn-primary w-15 col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2"
                >
                  <FaPlaystation className="me-2" /> PlayStation
                </motion.button>
              </Link>
              <Link to="/store/nintendo" className="HLink">
                <motion.button
                  animate={animation}
                  transition={{
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className="item-two btn btn-danger w-15 col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2"
                >
                  <SiNintendoswitch className="me-2" /> Nintendo
                </motion.button>
              </Link>
              <Link to="/store/xbox" className="HLink ">
                <motion.button
                  animate={animation}
                  transition={{
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className="item-three btn btn-success w-15 col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2"
                >
                  <FaXbox className="me-2" /> Xbox
                </motion.button>
              </Link>
              <Link to="/store/pc" className="HLink">
                <motion.button
                  animate={animation}
                  transition={{
                    duration: 0.7,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className="item-four btn btn-dark w-15 col-lg-2 col-md-4 col-sm-12 col-9 mb-3 p-2"
                >
                  <RiComputerFill className="me-2" /> Pc
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <Gallery />
        <br />
        <br />
        <h1 className="display-2 text-center text-light mb-3 MTT">
          Meet The Team
        </h1>
        <h3 className="text-capitalize text-center text-light mb-5 MTT">
          level up gaming creators
        </h3>
        <hr className="text-white fw-bold" />
        <div
          className="d-flex justify-content-around row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5  
"
        >
          {theTeam.map((teammate) => {
            return <MeetTheTeam key={teammate.id} teammate={teammate} />;
          })}
        </div>
        <br />
        <br />
        <Testimonials />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
