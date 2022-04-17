import styled from 'styled-components';


export const StyledSubscriptions = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  height: 100%;

  h2 {
    margin-top: 3rem;
    margin-bottom: 5rem;
  
  }
  
`;

export const StyledSubs = styled.div`
  display: grid ;
  
  width: 80%;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  min-width: 0;
`;

export const StyledSub = styled.div`
  display: flex;
  
  padding: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
    font-size: 1rem;
    min-width: 0;

    h1 {
    font-size: 0.8rem;
    color: #ffd021;
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
    border: 2px solid white;
    width: 70%;
    min-height: 80%;
    min-width: 150px;
    margin: auto;
    min-width: 0;
    img {
      width: 100%;
      height: 100%;
      min-width: 0;
    }
  }

`;
