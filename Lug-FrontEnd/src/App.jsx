import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Switch /* , useLocation */, Redirect } from "react-router";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import userService from "./services/userService";
import SignupPremium from "./components/SignupPremium";
import pageNotFound from "./components/pageNotFound";
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import Logout from "./components/logout";
import store from "./components/store";
import Cart from "./components/common/cart";
import Checkout from "./components/common/checkout";
import Playstation from "./components/playstation";
import Xbox from "./components/xbox";
import Nintendo from "./components/nintendo";
import Pc from "./components/pc";
import Events from "./components/events";
import About from "./components/about";
import ProtectedRoute from "./components/common/protectedRoute";
class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    // checking if is logged in and taking the user data into the state
    this.setState({
      user: userService.isUserLogged(),
    });
  }
  /*  const location = useLocation(); */
  render() {
    const { user } = this.state;
    return (
      <div className="App min-vh-100">
        <header>
          <Navbar user={user} />
        </header>
        <ToastContainer />
        <AnimatePresence>
          <Switch /* location={location} key={location.key} */>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/signin" component={SignIn} exact />
            <Route path="/signuppremium" component={SignupPremium} exact />
            <ProtectedRoute path="/profile" component={Profile} exact />
            <ProtectedRoute path="/cart" component={Cart} exact />
            <ProtectedRoute
              path="/profile/edit/:id"
              component={EditProfile}
              exact
            />
            <ProtectedRoute path="/logout" component={Logout} exact />
            <ProtectedRoute path="/store" component={store} exact />
            <ProtectedRoute path="/checkout" component={Checkout} exact />
            <ProtectedRoute
              path="/store/playstation"
              component={Playstation}
              exact
            />
            <ProtectedRoute path="/store/xbox" component={Xbox} exact />
            <ProtectedRoute path="/store/pc" component={Pc} exact />
            <ProtectedRoute path="/store/nintendo" component={Nintendo} exact />
            <ProtectedRoute path="/events" component={Events} exact />
            <Route path="/pageNotFound" component={pageNotFound} exact />
            <Redirect to="/pageNotFound" component={pageNotFound} />
          </Switch>
        </AnimatePresence>
      </div>
    );
  }
}

export default App;
