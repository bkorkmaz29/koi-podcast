import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 0fr 0fr 2fr;
  padding: 2rem;

  .nav-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100vw;
      font-size: 1.5rem;
      text-align: center;
    }
  }

  .podcasts-wrapper {
    margin: auto;
  }

  .search-wrapper {
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

    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 2rem;
  }

  .result-wrapper {
    margin: auto;
    padding: 2rem;
  }

  .button-back {
    font-size: 2.2rem;
    margin: auto;

    background: none;
    border: none;
    padding: 1rem;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: transform 0.4s;
    transition: all 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.orange};
      transform: scale(1.2);
    }
  }

  h2 {
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
    color: ${({ theme }) => theme.white};
    margin: auto;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;
