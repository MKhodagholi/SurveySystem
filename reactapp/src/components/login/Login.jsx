import React, { useRef, useState } from "react";
import LoginStyled from "./LoginStyled";

import { Link } from "react-router-dom";

const Login = ({ userXLoginnedChanged }) => {
  const [isColor, setIsColor] = useState(false);
  const toggle = () => {
    setIsColor((prev) => !prev);
  };

  const [formIsValid, setFormIsValid] = useState({
    username: false,
    password: false,
    error: { username: false, password: false },
  });
  const { error } = formIsValid;
  const { username, password } = error;

  const usernameChangeHandler = (e) => {
    const username = e.target.value;
    if (username.trim() !== "") {
      if (username.length > 2)
        setFormIsValid((prev) => ({
          ...prev,
          username,
          error: { ...prev.error, username: null },
        }));
      else
        setFormIsValid((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            username: "username at least must have 3 characters",
          },
        }));
    } else {
      setFormIsValid((prev) => ({
        ...prev,
        error: { ...prev.error, username: "username can not be empty!" },
      }));
    }
  };

  const passwordChangeHandler = (e) => {
    const password = e.target.value;
    if (password.trim() !== "") {
      if (password.length > 2)
        setFormIsValid((prev) => ({
          ...prev,
          password,
          error: { ...prev.error, password: null },
        }));
      else
        setFormIsValid((prev) => ({
          ...prev,
          error: {
            ...prev.error,
            password: "password at least must have 3 characters",
          },
        }));
    } else {
      setFormIsValid((prev) => ({
        ...prev,
        error: { ...prev.error, password: "password can not be empty!" },
      }));
    }
  };

  const hasError = (password, username) => {
    if (password === null && username === null) {
      return false;
    }
    return true;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!hasError(username, password)) console.log(formIsValid);
    userXLoginnedChanged(1);
  };

  return (
    <LoginStyled>
      <h1 className={isColor ? "color" : ""}>--- Login ---</h1>
      <div className="input-box">
        <input
          type="text"
          autoComplete="off"
          onFocus={toggle}
          onBlur={toggle}
          onChange={usernameChangeHandler}
        />
        <span>Username</span>
      </div>
      <h2 className="error">{formIsValid.error.username}</h2>
      <div className="input-box">
        <input
          type="password"
          onFocus={toggle}
          onBlur={toggle}
          onChange={passwordChangeHandler}
        />
        <span>Password</span>
      </div>
      <h2 className="error">{formIsValid.error.password}</h2>
      <Link to="/register">No Account?</Link>
      <button
        className={!hasError(username, password) ? "isOk" : ""}
        onClick={loginHandler}
      >
        Login
      </button>
    </LoginStyled>
  );
};

export default Login;
