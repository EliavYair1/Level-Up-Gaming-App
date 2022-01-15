import "./css components/storeSideNav.css";
import { Link } from "react-router-dom";
import { SiNintendoswitch } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";
import logo from "../logo/new logo revised/HD file.png";
const StoreSideNav = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark store-container">
      <Link
        to="/store"
        className="d-flex align-items-center mt-5 mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <div className="fs-4">
          <img src={logo} className="sidebar-logo" alt="" />
        </div>
      </Link>
      <hr />
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/store/playstation"
            className="nav-link"
            aria-current="page"
          >
            <span className="me-4">
              <FaPlaystation />
            </span>
            Playstaion
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store/nintendo" className="nav-link text-danger">
            <span className="me-4">
              <SiNintendoswitch />
            </span>
            Nintendo
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store/xbox" className="nav-link text-success">
            <span className="me-4">
              <FaXbox />
            </span>
            Xbox One
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store/pc" className="nav-link text-white">
            <span className="me-4">
              <RiComputerLine />
            </span>
            Pc Games
          </Link>
        </li>
      </ul>
      <div className="adds-store d-flex align-items-center mt-5">
        <p className="cnnContents">
          <span className="marqueeStyle">
            &nbsp;Level-Up Gaming Let The Games Begin
          </span>
        </p>
      </div>
    </div>
  );
};

export default StoreSideNav;
