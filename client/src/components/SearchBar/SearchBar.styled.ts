import styled from "styled-components";

export const StyledSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 30rem;
  height: 3rem;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.smobile}) {
    margin-top: 4rem;
    width: 15rem;
    font-size: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin-top: 4rem;
    font-size: 0.75rem;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 4rem;
  }

  input {
    width: 80%;
    height: 100%;
    max-width: 500px;
    font-size: 1.5em;
    padding: 5px;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
  }

  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    margin: auto;
    cursor: pointer;
    background-color: ${({ theme }) => theme.red};
    border: 1px solid #000;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    font-size: 1.2rem;

    @media (min-width: ${({ theme }) => theme.smobile}) {
      font-size: 0.7rem;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8rem;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
