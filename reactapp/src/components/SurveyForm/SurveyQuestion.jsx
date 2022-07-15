import React from "react";
import SurveyQuestionStyled from "./SurveyQuestionStyled";

const SurveyQuestion = ({ number, type }) => {
  return (
    <SurveyQuestionStyled>
      {type === "tashrihi" ? (
        <div className="question-tashrihi">
          <input type="text" />
        </div>
      ) : (
        <div className="question-testi">
          <div className="question">
            <span>سوال {number}:</span>
            <input type="text" />
          </div>
          <ul>
            <li>
              <span>گزینه ۱: </span>
              <input type="text" />
            </li>
            <li>
              <span>گزینه ۲: </span>
              <input type="text" />
            </li>
            <li>
              <span>گزینه ۳: </span>
              <input type="text" />
            </li>
            <li>
              <span>گزینه ۴: </span>
              <input type="text" />
            </li>
          </ul>
        </div>
      )}
    </SurveyQuestionStyled>
  );
};

export default SurveyQuestion;
