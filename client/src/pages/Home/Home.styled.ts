import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
 

  .search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: auto;
  height: 100%;
  width: 75%;

  }

  .result-wrapper {
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 90%;
  }

`;
