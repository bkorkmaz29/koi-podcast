import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.black};
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media (min-width: ${({ theme }) => theme.smobile}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 16px;
  }

  .form-container {
    border-radius: 9px;
    background-color: ${({ theme }) => theme.grey};
    width: 25em;
    height: 32em;
    margin: 6em auto 0;
  }

  .footer {
    color: ${({ theme }) => theme.lightGrey};
    font-family: verdana;
    margin: 2em auto;
    font-size: 0.8em;
  }

  img {
    width: 8em;
  }
`;
