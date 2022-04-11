import { StyledLogin, LoginButton, LoginContainer } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

const Login = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/home";
    navigate(path);
  };

  return (
    <LoginContainer>
      <Header />
      <StyledLogin>
        <LoginButton onClick={routeChange} />
      </StyledLogin>
    </LoginContainer>
  );
};

export default Login;
