import React, { useState } from "react";

import "./loginForm.css";
import Wrapper from "../helpers/wrapper"


const LoginForm = props => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userNameChangeHandler = e => {
    setUserName(e.target.value);
  };

  const userPasswordChangeHandler = e => {
    setUserPassword(e.target.value);
  };

  const submitHandler = e => {
      e.preventDefault();
      const loginData = {
        username: userName,
        password: userPassword,
      }
      props.onUserLogin(loginData);
      setUserName("");
      setUserPassword("");
  }

  return (
    <Wrapper>
      <form id="Login-form" onSubmit={submitHandler}>
        <label className="">
          Username :
          <input
            type="text"
            className="login-form-username"
            name="username"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </label>
        <label className="">
          Password :
          <input
            type="password"
            className="login-form-password"
            name="password"
            value={userPassword}
            onChange={userPasswordChangeHandler}
          />
        </label>
        <button className="login-form-button" type="submit">
          Login
        </button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
