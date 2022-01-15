import Form from "./common/form";
import Joi from "joi";
import "./css components/signuppremium.css";
import userService from "../services/userService";
import { motion } from "framer-motion";
class SignupPremium extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };
  // create schema for sign up premium component (validate in form component)
  schema = {
    firstName: Joi.string().required().min(2).max(1024),
    lastName: Joi.string().required().min(2).max(1024),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(5).max(1024),
  };
  /* do submit take place when the form is submitted by user takes the user data from the state.
  takes copt of the user data and add premiuem parameter as "true" (regular user signup) (premium required by backend schema)
  failure -> response the errors from the joi validate  */
  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };
    try {
      await userService.createUser(body);
      await userService.login(body.email, body.password);
      window.location = "/events";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
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
        <div className="container-fluid bg-image img-fluid signupPremium-container">
          <div className="container text-start pt-5 header">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="text-white"
                  variants={headerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Premium Sign Up
                </motion.h1>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-start sub-header">
            <div className="row ">
              <div className="col-12 mt-5">
                <motion.h4
                  className="text-white text-underline"
                  variants={cVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Sign up for Exclusive Content
                </motion.h4>
                <motion.form
                  className="mt-5 align-items-center form"
                  variants={FVariants}
                  initial="hidden"
                  animate="visible"
                  onSubmit={this.handleSubmit}
                >
                  {this.renderInput("firstName", "First Name", "text", true)}
                  {this.renderInput("lastName", "Last Name", "text", true)}
                  {this.renderInput("email", "Email", "text", true)}
                  {this.renderInput("password", "Password", "password", true)}

                  <div className="m-5 px-5">{this.renderButton("Sign Up")}</div>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignupPremium;
