import { Link } from "react-router-dom";
import "./css components/profile.css";
import userService from "../services/userService";
import React from "react";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

class Profile extends React.Component {
  state = {
    user: null,
  };
  // 1. Takeing the addedItems
  // creating a hook that will
  // Takes the token from the local storage and decode it for take the id and fetch user details from mongo with id.
  // set user data into the state
  async componentDidMount() {
    const jwt = localStorage.getItem(TOKEN_KEY);
    const decode = jwtDecode(jwt);
    const id = decode._id;
    const { data } = await userService.getUserInfo(id);
    this.setState({
      user: data,
    });
  }

  // function that delete user from db, remove token from local storage and redirect user with window.location for refresh and update the state.

  handleDelete = async (id) => {
    await userService.deleteUser(id);
    userService.logout();
    const { user } = this.state;
    this.setState({
      user: user,
    });
    window.location = "/signup";
  };
  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <>
        <div className="container-fluid profile-container p-5">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Delete The Account? 😭
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Are You Sure </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(user._id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    Hell No!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-container ">
            <h1 className="text-center text-white pt-3">
              Personal Information
            </h1>

            <div className="card-container">
              <div className="card">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  className="profile-img "
                />
              </div>
            </div>
            <div className="form-container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="form-wrapper p-2 ">
                    <h4 className="mt-3">
                      <b className="text-center">Welcome </b>
                    </h4>
                    <p className="text-white text-capitalize">
                      First Name: {user?.firstName}{" "}
                    </p>
                    <p className="text-white text-capitalize">
                      Last Name: {user?.lastName}{" "}
                    </p>
                    <p className="text-white text-capitalize">
                      Email: {user?.email}
                    </p>
                    <Link
                      className="btn btn-lg btn-outline-dark"
                      to={`/profile/edit/${user?._id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-lg btn-outline-danger ms-3 mt-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      to="#"
                    >
                      Delete
                    </Link>
                    <br /> <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
