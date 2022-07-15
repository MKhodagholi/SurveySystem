import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import RegisterStyled from "./RegisterStyled";

const REGISTER_URL = "/register";

const Register = () => {
  const navigate = useNavigate();
  const [lastId, setLastId] = useState(0);
  const userRef = useRef(null);
  const [userArray, setUserArray] = useState([]);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setmatchPwd] = useState("");
  const [validMath, setValidMath] = useState(false);

  const [errInUsername, setErrInUsername] = useState(null);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    userRef.current.focus();
    axios.get("http://localhost:8000/users").then((res) => {
      const lastUserId = res.data[res.data.length - 1].id;
      setLastId(lastUserId);
      setUserArray(res.data);
    });
  }, []);

  useEffect(() => {
    let result = user.trim().length > 2;
    const indexUser = userArray.findIndex(
      (userInArray) => userInArray.username === user
    );
    if (indexUser !== -1) {
      result = false;
      setErrInUsername("این نام کاربری قبلا یک نفر دیگه برداشته شده است");
    } else {
      result = true;
      setErrInUsername(null);
    }
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = pwd.trim().length > 2;
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMath(match);
    if (!match) setErr("پسورد ها یکسان نیستند");
    else setErr(null);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const isSuccess = validName && validPwd && validMath;
    setSuccess(isSuccess);
  }, [validName, validPwd, validMath]);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(user, pwd, matchPwd);
    axios
      .post("http://localhost:8000/create-user", {
        username: user,
        password: pwd,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate(`/user/${lastId}`);
  };

  return (
    <RegisterStyled>
      <h1 className={success ? "correct" : "wrong"}>--- Register ---</h1>
      <div
        className={`input-box 
        ${user.length > 0 ? (validName === true ? "correct" : "wrong") : ""}`}
      >
        <input
          type="text"
          autoComplete="off"
          ref={userRef}
          onFocus={() => {
            setUserFocus(true);
            setIsColor(true);
          }}
          onBlur={() => {
            setUserFocus(false);
            setIsColor(false);
          }}
          onChange={(e) => setUser(e.target.value)}
        />
        <span>Username</span>
      </div>
      <div
        className={`input-box
        ${pwd.length > 0 ? (validPwd === true ? "correct" : "wrong") : ""}
      `}
      >
        <input
          type="password"
          required
          onFocus={() => {
            setIsColor(true);
          }}
          onBlur={() => {
            setIsColor(false);
          }}
          onChange={(e) => setPwd(e.target.value)}
        />
        <span>Password</span>
      </div>
      <div
        className={`input-box
        ${matchPwd.length > 0 ? (validMath === true ? "correct" : "wrong") : ""}
      `}
      >
        <input
          type="password"
          required
          onFocus={() => {
            setIsColor(true);
          }}
          onBlur={() => {
            setIsColor(false);
          }}
          onChange={(e) => setmatchPwd(e.target.value)}
        />
        <span>Confirm Password</span>
      </div>
      {errInUsername !== null ? (
        <p className="err">
          خطای نام کاربری: <span>{errInUsername}</span>
        </p>
      ) : (
        ""
      )}
      {err !== null ? (
        <p className="err">
          خطای گذرواژه: <span>{err}</span>
        </p>
      ) : (
        ""
      )}
      <Link to="/login">Have Account?</Link>
      <button disabled={!success ? true : false} onClick={handleSumbit}>
        Login
      </button>
    </RegisterStyled>
  );
};

export default Register;
