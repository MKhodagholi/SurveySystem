import React from "react";
import { useRef, useState } from "react";
import SurveyQuestionStyled from "./SurveyQuestionStyled";

const SurveyQuestion = ({ number, type, saveData }) => {
  const [question, setQuestion] = useState("");
  const [isClick, setIsClick] = useState(false);

  const [anss, setAnss] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
  });

  const isOkForm = () => {
    if (
      anss.ans1.trim() !== "" &&
      anss.ans2.trim() !== "" &&
      anss.ans3.trim() !== "" &&
      anss.ans4.trim() !== ""
    )
      return true;
    return false;
  };

  const questionChangeHandler = (e) => {
    setQuestion(e.target.value);
  };

  const ans1ChangeHandler = (e) => {
    setAnss((prevAnss) => ({ ...prevAnss, ans1: e.target.value }));
  };

  const ans2ChangeHandler = (e) => {
    setAnss((prevAnss) => ({ ...prevAnss, ans2: e.target.value }));
  };

  const ans3ChangeHandler = (e) => {
    setAnss((prevAnss) => ({ ...prevAnss, ans3: e.target.value }));
  };

  const ans4ChangeHandler = (e) => {
    setAnss((prevAnss) => ({ ...prevAnss, ans4: e.target.value }));
  };

  const questionSubmitHandler = (e) => {
    e.preventDefault();
    if (!isClick) {
      if (isOkForm()) {
        saveData({ question, anss });
      }
      setIsClick(true);
    }
  };

  return (
    <SurveyQuestionStyled>
      {type === "tashrihi" ? (
        <div className="question-tashrihi">
          <div className="question">
            <span>سوال {number}:</span>
            <input type="text" onChange={questionChangeHandler} />
          </div>
          <button onClick={questionSubmitHandler}>ثبت سوال</button>
        </div>
      ) : (
        <div className="question-testi">
          <div className="question">
            <span>سوال {number}:</span>
            <input type="text" onChange={questionChangeHandler} />
          </div>
          <ul>
            <li>
              <span>گزینه ۱: </span>
              <input type="text" onChange={ans1ChangeHandler} />
            </li>
            <li>
              <span>گزینه ۲: </span>
              <input type="text" onChange={ans2ChangeHandler} />
            </li>
            <li>
              <span>گزینه ۳: </span>
              <input type="text" onChange={ans3ChangeHandler} />
            </li>
            <li>
              <span>گزینه ۴: </span>
              <input type="text" onChange={ans4ChangeHandler} />
            </li>
          </ul>
          <button onClick={questionSubmitHandler}>ثبت سوال</button>
        </div>
      )}
    </SurveyQuestionStyled>
  );
};

export default SurveyQuestion;
