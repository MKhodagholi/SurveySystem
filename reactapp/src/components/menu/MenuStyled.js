import styled from "styled-components";

const MenuStyled = styled.div`
  ul {
    list-style: none;
    direction: rtl;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.yellowColor};
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.darkBlueColor};
    overflow: hidden;
    right: 50%;
    transform: translateX(50%);
    border-radius: 20px 20px 0 0;
    border-bottom: 0;
    li {
      /* width: 100%; */
      flex-grow: 2;
      /* border-bottom: 1px solid ${({ theme }) => theme.colors.yellowColor}; */
      &:last-of-type {
        border-bottom: none;
      }
      a {
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2rem;
        padding: 1rem;
        transition: all 0.5s ease;
        &:not(.active):hover {
          background-color: ${({ theme }) => theme.colors.yellowColor};
          color: ${({ theme }) => theme.colors.redColor};
        }
        &.active {
          background-color: ${({ theme }) => theme.colors.yellowColor};
          color: ${({ theme }) => theme.colors.darkBlueColor};
        }
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: column;
      width: 100px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 20px 0 0 20px;
      border-right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.yellowColor};
    }
  }
`;

export default MenuStyled;
