import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LevelUpLogo, LevelUpLogoCollapse } from "./common/logo";
import "./css components/navbar.css";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
// 1. Takeing the addedItems data as prop from redux state
// 2. Takeing user data from Home component to check if he is logged or no and shows the links inside navbar dynamically

const Navbar = ({ user, addedItems }) => {
  // creating a hook that will increment each time a product is added to the cart

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let counter = 0;
    addedItems.forEach((item) => {
      counter += item.qty;
    });
    setCartCount(counter);
  }, [addedItems, cartCount]);

  const linkVariants = {
    hidden: {
      y: -250,
    },
    visible: {
      y: 0,

      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md  navbar-dark  px-3 py-2 text-danger boxShadow myNavbar"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid text-center google-font">
          <button
            className="navbar-toggler collapsed navi"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <LevelUpLogoCollapse />

          <div className="navbar-collapse collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 col-12 toflex">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <motion.div
                    className="nav-icon"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-house-door d-block mx-auto mb-1  colorLink"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                    <span className="colorLink">Home</span>
                  </motion.div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  <motion.div
                    className="nav-icon"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-info-circle d-block mx-auto mb-1 colorLink"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <span className="colorLink">About</span>
                  </motion.div>
                </Link>
              </li>
              {!user && (
                <li className="nav-item mt-3">
                  <Link to="/console" className="nav-link">
                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-gift d-block mx-auto mb-1 colorLink"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                      </svg>
                      <span className="colorLink">Console</span>
                    </motion.div>
                  </Link>
                </li>
              )}
              {(user || user?.biz) && (
                <li className="nav-item login-item">
                  <Link to="/cart" className="nav-link">
                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-cart d-block mx-auto mb-1 colorLink"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>

                      <span className="colorLink ">
                        Cart &nbsp;
                        <b className="cartCounter">{cartCount}</b>
                      </span>
                    </motion.div>
                  </Link>
                </li>
              )}

              <LevelUpLogo />

              {!user || (
                <li className="nav-item login-item">
                  <Link to="/store" className="nav-link ">
                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-controller d-block mx-auto mb-1 colorLink"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                      </svg>
                      <span className="colorLink">Store</span>
                    </motion.div>
                  </Link>
                </li>
              )}

              {!user && !user?.biz && (
                <li className="nav-item nav-item-d">
                  <Link to="./signup" className="nav-link">
                    <motion.div
                      className="nav-icon"
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-at d-block mx-auto mb-1 colorLink ms-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                      </svg>
                      <span className="colorLink">Sign Up</span>
                    </motion.div>
                  </Link>
                </li>
              )}

              {!user?.biz && (
                <li className="nav-item nav-item-d">
                  <Link to="/signuppremium" className="nav-link">
                    <motion.div
                      className="nav-icon"
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-briefcase d-block mx-auto mb-1 colorLink ms-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                      <span className="colorLink">Sign Up Premium</span>
                    </motion.div>
                  </Link>
                </li>
              )}

              {user?.biz && (
                <li className="nav-item">
                  <Link to="/events" className="nav-link mt-3">
                    <motion.div
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-gift d-block mx-auto mb-1 colorLink"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                      </svg>
                      <span className="colorLink">Events</span>
                    </motion.div>
                  </Link>
                </li>
              )}

              {!user && (
                <li className="nav-item nav-item-d">
                  <Link to="/signin" className="nav-link">
                    <motion.div
                      className="nav-icon"
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-box-arrow-in-right d-block mx-auto mb-1 colorLink ms-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                      </svg>
                      <span className="colorLink">Sign In</span>
                    </motion.div>
                  </Link>
                </li>
              )}
              {user && (
                <div className="dropdown mt-3">
                  <Link
                    to=""
                    className="btn text-white nav-link me-2"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <motion.div
                      className="nav-icon"
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-gear d-block mx-auto mb-1 "
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                      </svg>
                      <span className="colorLink">Settings</span>
                    </motion.div>
                  </Link>

                  <ul
                    className="dropdown-menu text-center bg-dark"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link
                        className="dropdown-item text-light text-decoration-none fw-bold"
                        to="/profile"
                      >
                        <i className="bi bi-person-fill text-danger">profile</i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-light text-decoration-none fw-bold"
                        to="/logout"
                      >
                        <i className="bi bi-box-arrow-right text-danger">
                          Logout
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
  };
};

export default connect(mapStateToProps)(Navbar);
