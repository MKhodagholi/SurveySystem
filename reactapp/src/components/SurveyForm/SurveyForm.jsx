import React from "react";
import SurveyFormStyled from "./SurveyFormStyled";
import SurveyQuestion from "./SurveyQuestion";

const SurveyForm = ({ number = 1, type = null }) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push("question");
  }

  console.log(array);

  return (
    <SurveyFormStyled>
      {array.map((question, index) => (
        <SurveyQuestion key={index} number={index + 1} type={type} />
      ))}
    </SurveyFormStyled>
  );
};

export default SurveyForm;
