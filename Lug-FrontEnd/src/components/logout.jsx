import { Component } from "react";
import userService from "../services/userService";
class Logout extends Component {
  state = {};

  componentDidMount() {
    //when the component runs => runs the logout function from the service
    //it will remove the user token.
    userService.logout();
    //remove cartItems "total" from the local storage
    localStorage.removeItem("cartItems");
    localStorage.removeItem("total");
    //redirect back to sign in
    window.location = "/signin";
  }
  render() {
    return null;
  }
}

export default Logout;
