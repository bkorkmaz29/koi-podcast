import styled from "styled-components";

export const StyledLoginForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 25em;
    max-height: 30em;
    min-width: 0;
    background-color: ${({ theme }) => theme.grey};
    border-radius: 9px;
    padding: 1em;
  }

  input[type="password"] {
    border-radius: 4px;
    width: 20em;
    height: 2em;
  }

  input[type="submit"] {
    border-radius: 4px;
    width: 100%;
    height: 2em;
  }

  input[type="text"] {
    border-radius: 4px;
    width: 20em;
    height: 2em;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 1em;
  }

  .form-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 4em;
    width: 100%;
  }

  .checkbox {
    margin: auto;
  }

  .signup-button {
    cursor: pointer;
    margin: 1em;
    color: ${({ theme }) => theme.mango};
    background-color: ${({ theme }) => theme.grey};
    border: none;
    :hover {
      opacity: 0.8;
    }
  }

  .login-button {
    margin: 1em;
    box-shadow: 0px 10px 14px -7px #276873;
    background: linear-gradient(to bottom, #f16323 5%, #ffd021 100%);
    background-color: #f16323;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 1em;
    font-weight: bold;
    padding: 13px 32px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
    :hover {
      opacity: 0.8;
    }
  }

  label {
    margin-bottom: 0.25em;
    color: ${({ theme }) => theme.white};
  }

  h2 {
    color: ${({ theme }) => theme.white};
  }
`;
