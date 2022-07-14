import styled from "styled-components";

const LoginStyled = styled.form`
  margin: auto;
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  padding: 1rem;
  border-radius: 4px;
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grayColor};
    transition: 0.5s;
  }
  h1.color {
    color: ${({ theme }) => theme.colors.primary};
  }
  h2 {
    color: red;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .input-box {
    position: relative;
    margin-bottom: 1rem;
    input {
      padding: 1rem;
      color: #fff;
      font-size: 1.5rem;
      outline: none;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.grayColor};
      color: #1b1b1b;
      border-radius: 5px;
      transition: 0.5s;
      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary};
        color: #fff;
      }
      &:focus ~ span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        transform: translateY(-40px);
        padding: 0 10px;
        background-color: #1b1b1b;
      }
    }
    span {
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: 1rem;
      transform: translateY(-50%);
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.grayColor};
      pointer-events: none;
      text-transform: uppercase;
      transition: 0.5s;
    }
  }
  button {
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grayColor};
    cursor: pointer;
    font-size: 2rem;
    font-family: "Courier New", Courier, monospace;
    margin-top: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.grayColor};
    padding: 0.5rem 3rem;
    border-radius: 4px;
    cursor: not-allowed;
    &.isOk {
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default LoginStyled;
