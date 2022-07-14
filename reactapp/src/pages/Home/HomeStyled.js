import styled from "styled-components";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  width: 80%;
  margin: auto;
  .links {
    position: fixed;
    top: 20px;
    left: 20px;
    a {
      display: inline-block;
      color: ${({ theme }) => theme.colors.yellowColor};
      text-decoration: none;
      border: 1px solid ${({ theme }) => theme.colors.yellowColor};
      padding: 1rem;
      text-align: center;
      border-radius: 4px;
      font-size: 1.5rem;
      width: 100px;
      transition: all 0.5s ease;
      font-family: "Noto";
      &:nth-of-type(1) {
        margin-left: 5px;
      }
      &:nth-of-type(2) {
        margin-right: 5px;
      }
    }
    @media screen and (min-width: 768px) {
      left: 20px;
      transform: none;
      a {
        font-size: 2rem;
        width: 150px;
        &:nth-of-type(1) {
          margin-left: 10px;
        }
        &:nth-of-type(2) {
          margin-right: 10px;
        }
      }
    }
  }
  .descriptions {
    margin-top: 2rem;
    color: white;
    margin-top: 10rem;
    ul {
      margin-top: 2rem;
      margin-right: 2rem;
      list-style-type: square;
      h2 {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.yellowColor};
      }
      li {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.greenColor};
        margin-right: 2rem;
      }
    }
    @media screen and (min-width: 768px) {
      margin-top: 10rem;
    }
  }
`;

export default HomeStyled;
