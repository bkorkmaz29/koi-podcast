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
    margin-bottom: 1rem;
    margin-top: 0;
    color: ${({ theme }) => theme.lightGrey};
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    margin: auto;
    padding: 0.7rem;
    overflow: hidden;
    color: ${({ theme }) => theme.white};
  }

 
  .podcast-wrapper {
    background: linear-gradient(to bottom, #FFD021, 5%, #E34427 100%);
    background-color: #f16323;
    width: 50%;
    height: 50%;
    margin: 1rem;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    -webkit-animation: fadein 1s;
  -moz-animation: fadein 1s;
  -ms-animation: fadein 1s;
  -o-animation: fadein 1s;
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  }
  .podcast-card {
    background-color: ${({ theme }) => theme.grey};
    width: 99%;
    display: flex;
    flex-direction: row;
    border-radius: 9px;
    margin: auto;
    
  }

  .podcast-info {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 30%;
    justify-content: center;
    align-items: center;
    margin: auto;
    

    .category {
      
      color: ${({ theme }) => theme.orange};
      font-weight: bold;
      border: 2px solid ${({ theme }) => theme.orange};
      font-size: 0.8rem;
      padding: 0.3rem;
      margin: auto;
      border-radius: 9px;
      background: none;
      


    }

  }



`;
