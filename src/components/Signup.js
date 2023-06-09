import React, { useState } from "react";
import classes from "./Signup.module.css";

export default function Signup(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [role, setRole] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const numberInputHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const roleInputHandler = (event) => {
    setRole(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      mobile: enteredNumber,
      role: role,
    };

    console.log(user);
    props.addNewUser(user);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredNumber("");
  };
  return (
    // <div className="outer_box">
    //   <form className="form_container" onSubmit={submitHandler}>
    //     <h1>SIGNUP</h1>
    //     <div className="form-group">
    //       <label htmlfor="exampleInputEmail1">Name</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         onChange={nameInputHandler}
    //         required
    //         value={enteredName}
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         We'll never share your email with anyone else.
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlfor="exampleInputEmail1">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         onChange={emailInputHandler}
    //         required
    //         value={enteredEmail}
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         We'll never share your email with anyone else.
    //       </small>
    //     </div>
    //     <div className="form-group">
    //       <label htmlfor="exampleInputPassword1">Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="exampleInputPassword1"
    //         onChange={passwordInputHandler}
    //         required
    //         value={enteredPassword}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlfor="exampleInputEmail1">Mobile No.</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         onChange={numberInputHandler}
    //         required
    //         value={enteredNumber}
    //       />
    //       <small id="emailHelp" className="form-text text-muted">
    //         We'll never share your number with anyone else.
    //       </small>
    //     </div>
    //     <div className="form-group form-check">
    //       <input
    //         type="checkbox"
    //         className="form-check-input"
    //         id="exampleCheck1"
    //         required
    //       />
    //       <label className="form-check-label" htmlfor="exampleCheck1">
    //         I agree to the terms and conditions.
    //       </label>
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //     <p>Already have an account ?</p>
    //     <button onClick={props.pageHandler}>Login</button>
    //   </form>
    // </div>
    <form onSubmit={submitHandler}>
      <h2>Registration</h2>
      <div>
        <button className={classes.closebutton} onClick={props.closeSignup}>
          Close
        </button>
      </div>
      <div>
        {/* <label>Name</label> */}
        <input
          type="text"
          name="name"
          value={enteredName}
          onChange={nameInputHandler}
          required
          placeholder="Your Name"
        />
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
          type="email"
          name="email"
          value={enteredEmail}
          onChange={emailInputHandler}
          required
          placeholder="Your email"
        />
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          value={enteredPassword}
          onChange={passwordInputHandler}
          required
          placeholder="Your password"
        />
      </div>
      <div>
        {/* <label>Number</label> */}
        <input
          type="text"
          name="number"
          value={enteredNumber}
          onChange={numberInputHandler}
          required
          placeholder="Mobile No."
        />
      </div>
      <div>
        {/* <label>Number</label> */}
        <input
          type="text"
          name="role"
          value={role}
          onChange={roleInputHandler}
          placeholder="Role"
        />
      </div>
      {/* <button type="button" onClick={sendOTP}>
        Send OTP
      </button> */}
      <button type="submit">Send OTP</button>
      <p>Already have an account ?</p>
      <button onClick={props.pageHandler}>Login</button>
    </form>
  );
}
