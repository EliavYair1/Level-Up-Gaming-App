import { motion } from "framer-motion";

const PageHeader = ({ title, para }) => {
  const Hvariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <>
      <div className="container">
        <div className="row mb-2">
          <div className="col-12 mt-3">
            <motion.h1
              variants={Hvariants}
              initial="hidden"
              animate="visible"
              className="text-center text-danger text-capitalize"
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
            className="col-12"
          >
            <h5 className="text-light text-center text-capitalize googleFontHeader">
              {para}
            </h5>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
