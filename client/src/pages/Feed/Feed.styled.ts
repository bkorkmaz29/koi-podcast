import styled from "styled-components";

export const StyledFeed = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wip {
    margin: auto;
    background-color: ${({ theme }) => theme.black};
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
  }

  h1 {
    color: ${({ theme }) => theme.mango};
  }


  @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}
 
  .logo {
    animation: rotation 5s infinite linear;
  }
`;
