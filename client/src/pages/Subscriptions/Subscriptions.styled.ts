import styled from "styled-components";

export const StyledSubscriptions = styled.div`

  background-color: ${({ theme }) => theme.black};
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;


    display: grid;
    grid-template-rows: 1fr 4fr;

  h2 {
    margin: auto;
    color: ${({ theme }) => theme.white};
  }

  .button-back {
    font-size: 2.2rem;
    margin: auto;
    width: 25%;
    height: 25%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: transform 0.4s;
    transition: all 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.orange};
      transform: scale(1.2);
    }
  }
`;
