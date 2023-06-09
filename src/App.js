import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import AdminPage from "./components/AdminPage";
// import UserPage from "./components/UserPage";
import OtpModal from "./components/OtpModal";
import Homepage from "./components/Homepage";
import UserPage from "./components/Userpage";
import Adminpage from "./components/Adminpage";

function App() {
  const [homepage, setHomepage] = useState(true);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState("");
  const [otpModal, setOtpModal] = useState(false);

  ///////////////////////// add user to database//////////////////////////////
  async function addUserHandler(user) {
    const response = await fetch(
      "https://online-hotel-registration.onrender.com/api/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      setOtpModal(true);
    }
    // const userDataResponse = await response.json();
    // setData(userDataResponse);
  }

  /////////////////////otp handler///////////////////////////

  async function otpCheckHandler(otp) {
    const response = await fetch(
      "https://online-hotel-registration.onrender.com/api/auth/email-otp-verification",
      {
        method: "POST",
        body: JSON.stringify(otp),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      setLogin(true);

      setOtpModal(false);
      setSignup(false);
    }
  }

  const removeOtpModel = () => {
    setOtpModal(false);
  };

  ////////////////////////user login///////////////////////////
  async function userLoginHandler(login) {
    const response = await fetch(
      "https://online-hotel-registration.onrender.com/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify(login),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      setLogin(false);
      setIsLoggedIn(true);
    }
  }

  ////////////////////////home page handler/////////////////

  const loginFromHomepage = () => {
    setLogin(true);
    setHomepage(false);
  };

  const signupFromHomepage = () => {
    setSignup(true);
    setHomepage(false);
  };
  //////////////////////back to home page/////////////////////

  const closeSignupHandler = () => {
    setSignup(false);
    setHomepage(true);
  };

  const closeLoginHandler = () => {
    setLogin(false);
    setHomepage(true);
  };

  /////////////////// login and signup ////////////////////////

  const loginPageHandler = () => {
    if (login === true) {
      setLogin(false);
      setSignup(true);
    }
    if (login === false) {
      setLogin(true);
      setSignup(false);
    }
  };
  // let content;

  // if (isLogin === true) {
  //   content = (
  //     <Login
  //       pageHandler={loginPageHandler}
  //       loginCheckHandler={userLoginHandler}
  //     />
  //   );
  // }
  // if (isLogin === false) {
  //   content = (
  //     <Signup pageHandler={loginPageHandler} addNewUser={addUserHandler} />
  //   );
  // }
  return (
    <div className="App">
      <header className="App-header">
        {homepage && (
          <Homepage onLogin={loginFromHomepage} onSignup={signupFromHomepage} />
        )}
        {login && (
          <Login
            pageHandler={loginPageHandler}
            loginCheckHandler={userLoginHandler}
            closeLogin={closeLoginHandler}
          />
        )}
        {signup && (
          <Signup
            pageHandler={loginPageHandler}
            addNewUser={addUserHandler}
            closeSignup={closeSignupHandler}
          />
        )}
      </header>
      {otpModal && (
        <OtpModal
          removeOtpModel={removeOtpModel}
          otpCheckHandler={otpCheckHandler}
        />
      )}

      {isLoggedIn && <UserPage />}
      {/* <Adminpage /> */}
    </div>
  );
}

export default App;
