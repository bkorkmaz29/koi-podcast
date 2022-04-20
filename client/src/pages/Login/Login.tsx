import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContainer } from "./Login.styled";
import { LoginForm, RegisterForm, Header } from "../../components";
import { User } from "../../models/models";
import { loginService, registerService } from "../../services/authService";
import logoPI from "../../assets/logoPI.svg";

const Login: React.FC = () => {
  const [register, setRegister] = useState<boolean>(false);
  let navigate = useNavigate();

  const handleLogin = (user: User) => {
    //setLoggedIn(true)
    loginService(user).then(() => {
      navigate("/home");
      //window.location.reload();
    });
  };

  const handleRegister = (user: User) => {
    registerService(user).then(() => {
      navigate("/");
      window.location.reload();
    });
  };
  return (
    <LoginContainer>
      <Header />
      <div className="form-container">
        {!register && (
          <LoginForm
            onLogin={handleLogin}
            onSignUp={() => setRegister(!register)}
          />
        )}
        {register && (
          <RegisterForm
            onLogin={() => setRegister(!register)}
            onRegister={handleRegister}
          />
        )}
      </div>
      <div className="footer"><img src={logoPI} alt="pi"/></div>
    </LoginContainer>
  );
};

export default Login;
