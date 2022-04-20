import styled from "styled-components";

interface Props {
  readonly open: boolean;
}

export const StyledBurger = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 16rem;
  height: 5rem;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.orange};
  border-radius: 9px;
  cursor: pointer;
  padding: 0.8rem;
  z-index: 10;
  transition: transform 0.4s;

  @media (min-width: ${({ theme }) => theme.smobile}) {
    position: relative;
    margin: 1rem auto;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    margin: 1rem auto;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    position: relative;
    margin: 1rem 1rem;
  }

  @media (min-width: ${({ theme }) => theme.laptop}) {
    position: relative;
    margin: 1rem 1rem;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    position: relative;
    margin: 1rem 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  .logo-wrapper {
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    font-family: "Major Mono Display", monospace;
    font-weight: bold;
    font-size: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    p {
      transition: all 0.3s linear;
      color: ${({ open }) => (open ? "black" : "white")};
    }

    span {
      color: ${({ theme }) => theme.orange};
    }
  }

  .burger {
    margin-left: 1rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme, open }) => (open ? theme.black : theme.white)};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
