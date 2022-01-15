import Input from "./input";
import React from "react";
import Joi from "joi";

class Form extends React.Component {
  //validate input field by Name and Value
  validateInput = ({ name, value }) => {
    //rearrange data as object - taking the "name" input dynamicly
    const data = {
      [name]: value,
    };
    //creating a joi schema object dynamically
    const schema = Joi.object({
      //creating dynamically input ( name :his schema)
      [name]: this.schema[name],
    });
    //checking the input via our schema object and return error if the is one or null if all its good

    const { error } = schema.validate(data);
    return error ? error.details[0].message : null;
  };
  //validate the form

  validateForm = () => {
    const {
      schema,
      state: { form },
    } = this;
    //checks the form form schema - return all errors from joi,
    //if all good return null.
    const { error } = Joi.object(schema).validate(form, { abortEarly: false });
    if (!error) {
      return null;
    } //create an empty object for errors
    const errors = {};
    //loop over error.details(joi returns) and set them into the error object
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }
    return errors;
  };
  //handle form submit
  handleSubmit = (e) => {
    console.log("from handle submit");
    e.preventDefault();
    //create error variable and set it to validatefrom that returns errors if the is any

    const errors = this.validateForm();
    //set errors to state
    this.setState({
      errors,
    });
    //if there is error stop here

    if (errors) {
      return;
    }
    this.doSubmit();
  };
  //handle any changes in the input
  //taking the "target from the event"

  handleChange = ({ target }) => {
    const { form, errors } = this.state;
    this.setState({
      form: {
        //take a copy of of form from the state and dynamically check each input name and value
        ...form,
        [target.name]: target.value,
      },
      errors: {
        //take a copy of errors from the state and check dynamically that cheanges made in the input match the joi schema via validateinput(target)
        ...errors,
        [target.name]: this.validateInput(target),
      },
    });
  };
  //function that renders an input component that display a input wit all params and two way binding

  renderInput(name, label, type = "text", required) {
    const { form, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        onChange={this.handleChange}
        value={form[name]}
        error={errors && errors[name]}
        type={type}
        required={required}
      />
    );
  }
  renderButton(label) {
    return (
      <button
        className="btn btn-outline-light btn-lg"
        disabled={this.validateForm()}
      >
        {label}
      </button>
    );
  }
}

export default Form;
