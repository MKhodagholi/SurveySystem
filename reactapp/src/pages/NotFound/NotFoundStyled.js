import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${({ theme }) => theme.colors.yellowColor};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

export default NotFoundStyled;
