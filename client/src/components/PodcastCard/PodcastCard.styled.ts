import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  
  height: 300px;
  min-width: 0;
  width: 300px;
  background-color: ${({ theme }) => theme.grey};
  border-radius: 9px;
  margin: auto;
  cursor: pointer;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    min-width: 0;

    h1 {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.mango};
      min-width: 0;
      margin-bottom: 0;
      margin: auto;
      padding: 2px;
    }

    h3 {
      font-size: 0.5rem;
      color: ${({ theme }) => theme.lightGrey};
      min-width: 0;
      margin: auto;
      padding: 2px;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5px;
    width: 60%;
    min-height: 60%;
    min-width: 150px;
    margin: auto;
    min-width: 0;
    img {
      width: 100%;
      height: 100%;
      min-width: 0;
    }
  }
  .buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    padding: 1px;
    width: 100%;
  }

  button {
    font-size: 0.7rem;
    background: linear-gradient(to bottom, #f16323 5%, #ffd021 100%);
    background-color: #f16323;
    border-radius: 9px;
    display: inline-block;
    cursor: pointer;
    color: black;
    padding: 7px 16px;
    text-shadow: 0px 1px 0px #3d768a;
    margin-bottom: 0.3rem;
    border: 1px solid #171717;
  }
`;
