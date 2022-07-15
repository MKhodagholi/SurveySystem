import styled from "styled-components";

const SurveyQuestionStyled = styled.div`
  margin-bottom: 7rem;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.yellowColor};
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.redColor};
    font-size: 1.5rem;
  }
  .question-tashrihi {
    display: flex;
    flex-direction: column;
  }
  .question-testi {
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.colors.yellowColor};
    border-top: none;
    padding: 2rem;
    padding-left: 1rem;
    border-radius: 8px;
    margin-bottom: -2rem;
    .question {
      display: flex;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 1rem;
      span {
        margin-left: 10px;
        font-family: "Noto";
      }
      input {
        width: 80%;
        font-size: 2rem;
        font-family: "Noto";
        padding-right: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }
    ul {
      list-style-type: none;
      li {
        display: flex;
        align-items: flex-start;
        input {
          font-size: 1.5rem;
          font-family: "Noto";
          padding-right: 1rem;
          padding-bottom: 0.5rem;
        }
        span {
          color: ${({ theme }) => theme.colors.greenColor};
          font-family: "Noto";
          margin-left: 10px;
        }
      }
    }
  }
`;

export default SurveyQuestionStyled;
