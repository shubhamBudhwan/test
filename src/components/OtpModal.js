import React, { useState } from "react";
import classes from "./OtpModal.module.css";

export default function OtpModal(props) {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const otpInputHandler = (event) => {
    setEnteredOtp(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const otpSubmitHandler = (event) => {
    event.preventDefault();

    const otp = { otp: enteredOtp, email: enteredEmail };
    props.otpCheckHandler(otp);
    setEnteredOtp("");
    setEnteredEmail("");
  };

  return (
    //   <div className={classes["form-container"]}>
    //     <label htmlfor="otpInput">OTP</label>
    //     <input
    //       type="text"
    //       className={classes["form-control"]}
    //       id="otpInput"
    //       aria-describedby="emailHelp"
    //       onChange={otpInputHandler}
    //     />
    //     <small id="otpHelp" className={classes["form-text text-muted"]}>
    //       We'll never share your details with anyone else.
    //     </small>
    //     <button onClick={otpSubmitHandler}>Submit</button>
    //   </div>
    <div id="otpModal" className={classes.modal}>
      <div className={classes["modal-content"]}>
        <span onClick={props.removeOtpModel} className={classes.close}>
          &times;
        </span>
        <h2>Enter OTP</h2>
        <input
          type="text"
          id="otpInput"
          className={classes.otpInput}
          maxlength="6"
          autofocus
          onChange={otpInputHandler}
        />
        <h2>Enter Email</h2>
        <input
          type="text"
          id="otpInput"
          className={classes.otpInput}
          autofocus
          onChange={emailInputHandler}
        />
        <button
          id="submitOTP"
          onClick={otpSubmitHandler}
          className={classes.submitOTP}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
