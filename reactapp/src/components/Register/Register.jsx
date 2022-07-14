import React, { useState, useRef, useEffect } from "react";

import RegisterStyled from "./RegisterStyled";

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef(null);
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setmatchPwd] = useState("");
  const [validMath, setValidMath] = useState(false);

  const [errMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = user.trim().length > 2;
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = pwd.trim().length > 2;
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMath(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    const isSuccess = validName && validPwd && validMath;
    setSuccess(isSuccess);
  }, [validName, validPwd, validMath]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    // if (!success) {
    //   setErrorMsg("Invalid Entry");
    //   return;
    // }
    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response);
    //   console.log(response.accessToken);
    //   console.log(JSON.stringify(response));
    // } catch (err) {
    //   if (!err.response) {
    //     setErrorMsg("No Server Response");
    //   } else if (err.response?.status === 409) {
    //     setErrorMsg("Username Taken");
    //   } else {
    //     setErrorMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <RegisterStyled>
      <h1 className={isColor ? "color" : ""}>--- Register ---</h1>
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
      <button disabled={!success ? true : false} onClick={handleSumbit}>
        Login
      </button>
    </RegisterStyled>
  );
};

export default Register;
