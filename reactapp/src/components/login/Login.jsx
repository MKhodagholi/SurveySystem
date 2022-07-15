import React, { useRef, useState, useEffect } from "react";
import LoginStyled from "./LoginStyled";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = ({ userXLoginnedChanged }) => {
  const [isColor, setIsColor] = useState(false);
  const toggle = () => {
    setIsColor((prev) => !prev);
  };

  const userRef = useRef(null);
  const [userArray, setUserArray] = useState([]);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
    axios.get("http://localhost:8000/users").then((res) => {
      setUserArray(res.data);
    });
  }, []);

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
    const username = formIsValid.username;
    const password = formIsValid.password;
    // if (hasError(username, password)) return;
    const userIndex = userArray.findIndex((user) => {
      console.log(user.username, user.password, username, password);
      return user.username === username && user.password === password;
    });
    console.log(userIndex);
    if (userIndex === -1) {
      setErr("همچین اکانتی وجود ندارد");
    } else {
      setErr(null);
      const userId = userArray[userIndex - 1].id;
      navigate(`/user/${userId}`);
    }
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
          ref={userRef}
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
