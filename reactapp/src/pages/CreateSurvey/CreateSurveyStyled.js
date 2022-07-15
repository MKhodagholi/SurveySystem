import styled from "styled-components";

const CreateSurveyStyled = styled.div`
  direction: rtl;
  width: 80%;
  transform: translateY(10rem);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -2rem;
  h1 {
    color: ${({ theme }) => theme.colors.yellowColor};
    margin-bottom: 2rem;
  }
  .questions {
    .question {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.yellowColor};
      font-size: 1.5rem;
      margin-bottom: 2rem;
      label {
        margin-left: 1rem;
        font-family: "Noto";
      }
      input {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: none;
        outline: none;
        font-size: 1.5rem;
        width: 100px;
        text-align: center;
        font-family: "Noto";
      }
      select {
        background-color: transparent;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 4px;
        font-family: "Noto";
      }
    }
  }
  button {
    background-color: transparent;
    outline: none;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.greenColor};
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    font-family: "Noto";
    border-radius: 4px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    display: block;
  }
`;

export default CreateSurveyStyled;
