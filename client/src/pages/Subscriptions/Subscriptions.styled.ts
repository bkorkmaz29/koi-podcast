import styled from "styled-components";

interface Props {
  readonly open: boolean;
}

export const StyledSubscriptions = styled.div<Props>`
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;

  display: grid;
  grid-template-rows: 0fr 2fr;

  .nav-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    height: ${({ open }) => (open ? "100vh" : "0vh")};
    font-size: 1.5rem;


    @media (min-width: ${({ theme }) => theme.smobile}) {
      width: 100vw;
      
    }

  }

  h2 {

    color: ${({ theme }) => theme.white};

    @media (min-width: ${({ theme }) => theme.smobile}) {
        margin: 4.5em auto 2em;
      }
    @media (min-width: ${({ theme }) => theme.mobile}) {
        margin: 4.5em auto 2em;
      }
 
  }

  .button-back {
    font-size: 2.2rem;
    margin: auto;
    width: 25%;
    height: 25%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    transition: transform 0.4s;
    transition: all 0.3s linear;

    @media (min-width: ${({ theme }) => theme.smobile}) {
        margin: 3em auto 1em;
      }
    @media (min-width: ${({ theme }) => theme.mobile}) {
        margin: 3em auto 1em;
      }
      @media (min-width: ${({ theme }) => theme.tablet}) {
        margin: 2em auto 1em;
      }
      @media (min-width: ${({ theme }) => theme.laptop}) {
        margin: 2em auto 1em;
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        margin: 2em auto 1em;
      }

    &:hover {
      color: ${({ theme }) => theme.orange};
      transform: scale(1.2);
    }
  }
`;
