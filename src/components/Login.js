import React, { useState } from "react";
import classes from "./Login.module.css";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitInputHandler = (event) => {
    event.preventDefault();
    const login = {
      email: enteredEmail,
      password: enteredPassword,
    };
    props.loginCheckHandler(login);
    setEnteredEmail("");
    setEnteredPassword("");
  };
  return (
    //   <div className="outer_box">
    //     <form onSubmit={submitInputHandler} className="form_container">
    //       <h1>LOGIN</h1>
    //       <div className="form-group">
    //         <label for="exampleInputEmail1">Email address</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           aria-describedby="emailHelp"
    //           onChange={emailInputHandler}
    //           value={enteredEmail}
    //           required
    //         />
    //         <small id="emailHelp" className="form-text text-muted">
    //           We'll never share your email with anyone else.
    //         </small>
    //       </div>
    //       <div className="form-group">
    //         <label for="exampleInputPassword1">Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           onChange={passwordInputHandler}
    //           value={enteredPassword}
    //           required
    //         />
    //       </div>
    //       <div className="form-group form-check">
    //         <input
    //           type="checkbox"
    //           className="form-check-input"
    //           id="exampleCheck1"
    //         />
    //         <label className="form-check-label" for="exampleCheck1">
    //           Keep me logged in.
    //         </label>
    //       </div>
    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //       <p>Not Registered ?</p>
    //       <button onClick={props.pageHandler}>Signup</button>
    //     </form>
    //   </div>
    <form onSubmit={submitInputHandler} className={classes.form}>
      <h2 className={classes.heading}>Login</h2>
      <div>
        <button className={classes.closebutton} onClick={props.closeLogin}>
          Close
        </button>
      </div>
      <div className={classes.inputcontainer}>
        {/* <label className="label">Email</label> */}
        <input
          type="email"
          name="email"
          value={enteredEmail}
          onChange={emailInputHandler}
          required
          className={classes.input}
          placeholder="Your Email"
        />
      </div>
      <div className={classes.inputcontainer}>
        {/* <label className="label">Password</label> */}
        <input
          type="password"
          name="password"
          value={enteredPassword}
          onChange={passwordInputHandler}
          required
          className={classes.input}
          placeholder="Your password"
        />
      </div>
      <button type="submit" className={classes.button}>
        Login
      </button>
      <p>Not Registered ?</p>
      <button onClick={props.pageHandler}>Signup</button>
    </form>
  );
}
