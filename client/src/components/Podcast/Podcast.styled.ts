import styled from "styled-components";

export const StyledPodcast = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.mango};
    margin: auto;
  }

  h3 {
    margin: auto;
    color: ${({ theme }) => theme.lightGrey};
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    margin: auto;
    padding: 0.7rem;
  }
  .podcast-card {
    background-color: ${({ theme }) => theme.grey};
    width: 50%;
    display: flex;
    flex-direction: row;
    border-radius: 9px;
    margin: 1rem;
  }

  .podcast-info {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    
  }

  .img-wrapper {
    width: 35%;
    margin: auto;
    padding: 0.4rem;
  }

  img {
    height: 100%;
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.red};
    padding: 0.7rem;
  }

  .cat-wrapper {

    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: auto;
    

    .category {
      background-color: ${({ theme }) => theme.orange};
      color: ${({ theme }) => theme.grey};
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.red};
      font-size: 0.8rem;
      padding: 2px;
      margin: auto;


    }

  }



`;
