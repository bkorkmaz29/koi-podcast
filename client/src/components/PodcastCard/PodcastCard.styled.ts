import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  margin: 0.5rem;
  flex-direction: row;
  align-items: center;
  height: 18rem;
  width: 100%;
  background-color: #171717;
  border-radius: 9px;

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    height: 150px;
    width: 150px;
    min-height: 150px;
    min-width: 150px;
    margin: 5%;

    img {
      width: 100%;
      height: 100%;
    }
  }

`;
