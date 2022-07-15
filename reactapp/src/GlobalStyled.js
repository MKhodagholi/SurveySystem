import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: #1b1b1b;
  }
`;

export default GlobalStyled;
