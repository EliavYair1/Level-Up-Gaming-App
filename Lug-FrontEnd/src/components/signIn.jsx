import Form from "./common/form";
import Joi from "joi";
import { motion } from "framer-motion";
import "./css components/login.css";
import userService from "../services/userService";
// import GoogleLogin from "../components/common/googleLogin";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(5).max(1024),
  };

  /* Do submit take place when the form is submitted by user takes the email and password of the user and try match the data.
  success=> login the user and redirect to home page
  failure => response the errors from the joi validate. */
  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: response.data,
        });
      }
    }
  }

  render() {
    const headerVariants = {
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
    const cVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: { duration: 1 },
      },
    };
    const FVariants = {
      hidden: {
        opacity: 0,
        y: "100vh",
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "tween",
        },
      },
    };

    return (
      <>
        <div className="signin-container">
          <div className="container pt-5 ms-5">
            <div className="row mt-5">
              <div className="col-12">
                <motion.h1
                  variants={headerVariants}
                  initial="hidden"
                  animate="visible"
                  className="header text-danger mt-5"
                >
                  Level Up Gaming
                </motion.h1>
                <motion.h3
                  variants={cVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-light"
                >
                  Sign In Your Account
                </motion.h3>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-start ms-5">
            <div className="row ">
              <div className="col-12 mt-5  ">
                <h3 className="text-white text-underline"> </h3>
                <motion.form
                  variants={FVariants}
                  initial="hidden"
                  animate="visible"
                  className="gy-5 mt-5  align-items-center"
                  onSubmit={this.handleSubmit}
                >
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}
                  {/* <GoogleLogin /> */}
                  <div className="m-5 px-5">{this.renderButton("Sign In")}</div>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
