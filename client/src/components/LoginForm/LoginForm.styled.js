import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 30%;
  height: 35%;
  min-width: 200px;
  background-color: #171717;
  border-radius: 9px;

  input[type="text"] {
    border-radius: 4px;
    width: 20rem;
    height: 2rem;
  }

  input[type="submit"] {
    border-radius: 4px;
    width: 5rem;
    height: 2rem;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 1rem;
  }

  .form-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2rem;
    width: 100%;

    height: 500px;
  }

  .checkbox {
    margin: auto;
  }

  .signup-button {
    margin: 1rem;
    color: #ffd021;
    background-color: #171717;
  }

  .login-button {
    box-shadow: 0px 10px 14px -7px #276873;
    background: linear-gradient(to bottom, #f16323 5%, #ffd021 100%);
    background-color: #f16323;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 1rem;
    font-weight: bold;
    padding: 13px 32px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
    margin: 1rem;
  }

  label {
    margin-bottom: 0.25rem;
  }
`;

export const LoginButton = styled.input`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 3rem;
  height: 2rem;
  background-color: white;
  border-radius: 4px;
  margin: 1rem;
`;
