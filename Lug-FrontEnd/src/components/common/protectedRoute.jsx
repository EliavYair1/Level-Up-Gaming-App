import { Redirect, Route } from "react-router-dom";
import usersService from "../../services/userService";
/*  protected route is a component thats meant to replace a normal Route -> checks if user is logged 
and returns either a component if user is logged or redirect him to signup if user isnt logged  */

const ProtectedRoute = ({ component: Component, render, biz, ...rest }) => {
  //check if user is logged and take his data
  const currentUser = usersService.isUserLogged();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return (
            //redirect to the sign up page
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
