import styled from "styled-components";

interface Props {
  readonly open: boolean;
}

export const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.white};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 300px;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.smobile}) {
    font-size: 1rem;
    width: 100vw;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
    width: 100vw;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.5rem;
    width: 100vw;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      background: none;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.black};
      cursor: pointer;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.red};
      }
    }
  }
`;
