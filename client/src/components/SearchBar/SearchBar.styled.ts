import styled from "styled-components";

export const StyledSearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 30rem;
  height: 3rem;
 

  input {
    width: 80%;
    height: 100%;
    max-width: 500px;
    font-size: 24px;
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
    background-color: #f3430c;
    border: 1px solid #000;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
  }
`;

