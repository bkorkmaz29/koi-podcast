import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: black;
  position:absolute;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: auto;

  .form-container{
   
    border-radius: 10px;
    box-shadow: 2px 2px 10px #353636;
    background-color: #171717;  
    margin: auto;
    max-width: 450px;
    max-height: 500px;
    min-width: 400px;
    min-height: 450px;
    width: 40%;
    height: 60%;
}
  `;

export const StyledLogin = styled.form`
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

  a {
    margin: 1rem;
    color: red;
  }

  label{
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

