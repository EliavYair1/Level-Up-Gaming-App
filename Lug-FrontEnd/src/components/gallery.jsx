import React, { useEffect, useState } from "react";
import "./css components/gallery.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import returnImgs from "../services/imgData";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  //fetching the imgs from the img data service
  const fetchImages = returnImgs();
  //view the component when the event is activated
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [images, setImages] = useState([]);

  const animation = useAnimation();
  useEffect(() => {
    console.log("use effect hook,inView=", inView);
    setImages(fetchImages);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "100vw" });
    }
  }, [inView, animation, fetchImages]);

  return (
    <>
      <div className="container">
        <SRLWrapper>
          <div className="wrapDiv " ref={ref}>
            <motion.div
              className="row text-center gy-3 gx-3"
              animate={animation}
            >
              {images.map(({ gallery }, index) => (
                <div
                  className="col-md-6 mt-5 col-lg-6 col-xl-4 col-12 gallery-box"
                  key={index}
                >
                  <img src={gallery} className=" gallery" alt="gallerypix" />
                </div>
              ))}
            </motion.div>
          </div>
        </SRLWrapper>
      </div>
      ;
    </>
  );
};
export default Gallery;
