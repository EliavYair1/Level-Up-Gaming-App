import Joi from "joi";
import Form from "./common/form";
import React from "react";
import "./css components/signup.css";
import { motion } from "framer-motion";
import { createUser } from "../services/userService";
import { toast } from "react-toastify";

class SignUp extends Form {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };
  // input validate the user data by joi
  schema = {
    firstName: Joi.string().min(2).max(1024).required(),
    lastName: Joi.string().min(2).max(1024).required(),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };
  /* do submit take place when the form is submitted by user takes the user data from the state.
  takes copt of the user data and add premiuem parameter as "false" (regular user signup) (premium required by backend schema)
  failure -> response the errors from the joi validate  */
  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: false };
    try {
      await createUser(body);
      this.props.history.replace("/signin");
      toast.success("Welcome To Level Up Gaming ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
        <div className="container-fluid bg-image img-fluid signup-container">
          <div className="container text-start pt-5">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  variants={headerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-danger"
                >
                  Level Up Gaming
                </motion.h1>
                <motion.h3
                  variants={cVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-light"
                >
                  Sign Up For Free
                </motion.h3>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-start">
            <div className="row ">
              <div className="col-12">
                <motion.form
                  variants={FVariants}
                  initial="hidden"
                  animate="visible"
                  className="gy-5 mt-5"
                  onSubmit={this.handleSubmit}
                >
                  {this.renderInput("firstName", "First Name")}
                  {this.renderInput("lastName", "Last Name")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  <div className="row">
                    <div className="col-12 mt-4  btn btn-lg w-100">
                      {this.renderButton("Sign Up")}
                    </div>
                  </div>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
