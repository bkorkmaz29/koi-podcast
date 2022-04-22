import styled from "styled-components";

interface Props {
  readonly open: boolean;
}

export const StyledHome = styled.div<Props>`
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 0fr 0fr 2fr;
  padding: 2em;

  .nav-wrapper {
    position: absolute;
    left: 0;
    top: 0;    
    font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.smobile}) {
      width: 100vw;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
      width: 0;
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
    padding: 2em;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      margin: 2rem auto 0;
    }

    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin: 3rem auto 0;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: auto;
    }
  }

  .result-wrapper {
    margin: auto;
    padding: 2em;
  }

  .button-back {
    font-size: 2.2em;
    margin: auto;

    background: none;
    border: none;
    padding: 1em;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: transform 0.4s;
    transition: all 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.orange};
      transform: scale(1.2);
    }

    @media (min-width: ${({ theme }) => theme.smobile}) {
      margin: 2em auto 0;
    }
    @media (min-width: ${({ theme }) => theme.mobile}) {
      margin: 2em auto 0;
    }
    @media (min-width: ${({ theme }) => theme.tablet}) {
      margin: auto;
    }
    @media (min-width: ${({ theme }) => theme.laptop}) {
      margin: auto;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: auto;
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
    margin: 0 auto 0;
    padding: 0.5em;
    font-size: 1.5em;
  }
`;
