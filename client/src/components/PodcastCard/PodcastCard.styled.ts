import styled from "styled-components";

export const StyledCard = styled.div`
   display: flex;
  
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 250px;
  background-color: #171717;
  border-radius: 9px;
  color: white;
  min-width: 0;
  margin-bottom: 1rem;
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
    color: #ffd021;
    min-width: 0;
  }

    h3 {
      font-size: 0.5rem;
      color: #9a9a9a;
      min-width: 0;
      margin-top: 0;
    }

  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
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
    width: 100%;
    }

    button {
    font-size: 0.5rem;
    background: linear-gradient(to bottom, #f16323 5%, #ffd021 100%);
    background-color: #f16323;
    border-radius: 9px;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-family: Arial;
    padding: 7px 16px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
    margin-bottom: 0.3rem;
    border: 1px solid #171717;
  }

    
    
    
  
`;
