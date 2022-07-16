import React, { useState, useRef } from "react";
import SurveyForm from "../../components/SurveyForm/SurveyForm";

import CreateSurveyStyled from "./CreateSurveyStyled";

import axios from "axios";

const CreateSurvey = () => {
  const [surveyInformation, setSurveyInformation] = useState({
    number: null,
    type: null,
  });

  const [showForm, setShowForm] = useState(false);

  const refInputNumber = useRef(null);
  const refSelectType = useRef(null);

  const makeSurveyHandler = () => {
    const number = +refInputNumber.current.value;
    const type = refSelectType.current.value;
    if (number === 0 || type === null) return;
    setSurveyInformation({ number, type });
    setShowForm(true);
  };

  const createPart = (
    <>
      <div className="questions">
        <div className="question">
          <label>چه تعداد سوال نیاز دارید</label>
          <input type="number" ref={refInputNumber} min="1" />
        </div>
        <div className="question">
          <label>نوع سوال ها چگونه باشد</label>
          <select defaultValue="test" ref={refSelectType}>
            <option value="tashrihi">تشریحی</option>
            <option defaultChecked value="test">
              تستی
            </option>
            <option value="tarkibi">ترکیبی (به زودی)</option>
          </select>
        </div>
      </div>
      <button onClick={makeSurveyHandler}>ایجاد نظرسنجی</button>
    </>
  );

  return (
    <CreateSurveyStyled>
      {showForm === false ? (
        createPart
      ) : (
        <>
          <h1>فرم نظرسنجی</h1>
          <SurveyForm
            number={surveyInformation.number}
            type={surveyInformation.type}
          />
        </>
      )}
    </CreateSurveyStyled>
  );
};

export default CreateSurvey;
