import { NavLink } from "react-router-dom";
import pageHeader from "./common/pageHeader";

const pageNotFound = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh", background: "#dedede" }}
        className="page-wrap d-flex flex-row align-items-center "
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center">
              <pageHeader
                title="404 - Page Not Found !"
                para="The page you are looking for was not found  "
              />
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <NavLink
                to="/"
                className="btn btn-link btn-primary text-light mt-5 w-25"
              >
                Back to Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pageNotFound;
