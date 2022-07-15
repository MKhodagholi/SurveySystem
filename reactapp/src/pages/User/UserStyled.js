import styled from "styled-components";

const UserStyled = styled.div`
  width: 80%;
  margin: auto;
  direction: rtl;
  height: 100vh;
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    li {
      &:first-of-type {
        margin-top: 5rem;
      }
    }
    button,
    a {
      background-color: transparent;
      text-decoration: none;
      outline: none;
      display: inline-block;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
      text-align: center;
      color: ${({ theme }) => theme.colors.greenColor};
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greenColor};
      font-size: 2rem;
      font-family: "Noto";
      border-radius: 4px;
      cursor: pointer;
      @media screen and (min-width: 768px) {
        margin-right: 5rem;
        width: initial;
      }
    }
  }
`;

export default UserStyled;
