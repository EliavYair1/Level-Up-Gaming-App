import userService from "../services/userService";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi";
import { toast } from "react-toastify";
import "./css components/editProfile.css";
//extend form component
class EditProfile extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };
  //validate form data by joi
  schema = {
    _id: Joi.string(),
    firstName: Joi.string().required().min(2).max(1024),
    lastName: Joi.string().required().min(2).max(1024),
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      })
      .max(1024),
    password: Joi.string().required().min(6).max(1024),
  };
  async componentDidMount() {
    //id = id in te url
    const id = this.props.match.params.id;
    const {
      data: { _id, firstName, lastName, email, password },
      //take the user from the service
    } = await userService.getUserInfo(id);
    this.setState({
      //reset the data into the form
      form: { _id, firstName, lastName, email, password },
    });
  }

  async doSubmit() {
    //change the object name 'form' to 'user' and take his data
    const { form: user } = this.state;
    //new const that copy all the user data and change the premium param to false
    const body = { ...user, biz: false };
    //edit the user data to the const from line 49
    await userService.editUser(body);
    toast.success("account is updated! 🤑", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    this.props.history.replace("/profile");
  }

  render() {
    return (
      <>
        <div className="container-fluid profileContainer p-5">
          <div className="innerContainer">
            <h1 className="text-center text-white pt-3">Edit Profile</h1>
            <div className="card-container">
              <div className="card">
                <img
                  className="ProfileImage "
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="form-container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="d-flex justify-content-center ">
                    <form
                      onSubmit={this.handleSubmit}
                      autoComplete="off"
                      className="gy-5 mt-4 w-50  "
                    >
                      <span className="text-dark">
                        {this.renderInput(
                          "firstName",
                          "First Name",
                          "text",
                          true
                        )}
                      </span>
                      {this.renderInput("lastName", "Last Name", "text", true)}
                      {this.renderInput("email", "Email", "text", true)}
                      {this.renderInput(
                        "password",
                        "Password",
                        "password",
                        true
                      )}

                      <div className="d-flex justify-content-around mb-4">
                        <span className="mt-3">
                          {this.renderButton("Save")}
                        </span>
                        <Link
                          to="/profile"
                          className="btn btn-lg btn-outline-dark mt-3"
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </>
    );
  }
}

export default EditProfile;
