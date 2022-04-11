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
`;

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 50%;
  height: 50%;
  background-color: #171717;  
  border-radius: 9px;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 40px;
  background-color: white;  
  border-radius: 9px;
`;