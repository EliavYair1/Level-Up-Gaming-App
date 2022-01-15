// import { useState } from "react";
// import userService from "../../services/userService";

const GoogleLogin = () => {
  //   const [loginData, setLoginData] = useState(
  //     localStorage.getItem("loginData")
  //       ? JSON.parse(localStorage.getItem("loginData"))
  //       : null
  //   );
  const handleFailure = (result) => {
    console.log(result);
  };
  const handleLogin = async (googleData) => {
    // const res = await fetch("/api/google/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // setLoginData(data);
    // localStorage.setItem("loginData", JSON.stringify(data));
    console.log(googleData);
  };
  //   const handleLogout = () => {
  //     localStorage.removeItem("loginData");
  //     setLoginData(null);
  //   };
  return (
    <>
      <h3>Or</h3>
      <div>
        {/* {loginData ? (
          <div>
            <h3>you login in as {loginData.email}</h3>
            <button>onClick={handleLogout}Logout</button>
          </div>
        ) : (
            )} */}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login With Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    </>
  );
};

export default GoogleLogin;
