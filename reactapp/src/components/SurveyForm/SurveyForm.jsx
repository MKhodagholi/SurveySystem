import React, { useState } from "react";
import SurveyFormStyled from "./SurveyFormStyled";
import SurveyQuestion from "./SurveyQuestion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SurveyForm = ({ number = 1, type = null }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const parts = pathname.split("/", 3);
  const id = parts[2];
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push("question");
  }

  const [data, setData] = useState();

  const saveData = (data) => {
    setData((prevData) => {
      const newArray = [];
      if (prevData !== undefined)
        prevData.forEach((dataInPrev) => newArray.push(dataInPrev));
      newArray.push(data);
      return newArray;
    });
  };

  const surveySubmitHandler = (e) => {
    e.preventDefault();
    const dataPost = {
      type_questions: type,
      num_key: id,
      number_questions: number,
      question: data[0].question,
      ans1: data[0].ans1,
      ans2: data[0].ans2,
      ans3: data[0].ans3,
      ans4: data[0].ans4,
    };
    console.log(dataPost);
    // if (
    //   dataPost.question.trim() === "" ||
    //   dataPost.ans1.trim() === "" ||
    //   dataPost.ans2.trim() === "" ||
    //   dataPost.ans3.trim() === "" ||
    //   dataPost.ans4.trim() === ""
    // )
    //   return;
    axios
      .post("http://localhost:8000/create-survey", dataPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate(`/user/${id}`);
  };

  return (
    <SurveyFormStyled>
      {array.map((question, index) => (
        <SurveyQuestion
          key={index}
          number={index + 1}
          type={type}
          saveData={saveData}
        />
      ))}
      <button onClick={surveySubmitHandler} className="add-survey">
        ساخت نظرسنجی
      </button>
    </SurveyFormStyled>
  );
};

export default SurveyForm;
