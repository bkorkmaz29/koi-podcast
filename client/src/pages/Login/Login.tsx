import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LoginContainer } from "./Login.styled";
import { LoginForm, RegisterForm } from "../../components";
import { User } from "../../models/models";

interface Props {
  loggedIn: Function;
}

const Login: React.FC<Props> = ({ loggedIn }) => {
  const [register, setRegister] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<String>();
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/search";
    navigate(path);
  };

  const onLogin = async (loginUser: User) => {
    setUser(loginUser);
    await axios
      .post(`http://localhost:5000/api/user/login`, {
        email: loginUser.email,
        password: loginUser.password,
      })
      .then((res) => setToken(res.data))
      .catch((err) => console.error(err));

    loggedIn();
    routeChange();
  };

  const onRegister = async (RegisterUser: User) => {
    await axios.post(`http://localhost:5000/api/user/login`, {
      name: RegisterUser.name,
      email: RegisterUser.email,
      password: RegisterUser.password,
    });
  };

  return (
    <LoginContainer>
      <div className="form-container">
        {!register && (
          <LoginForm
            onLogin={onLogin}
            onSignUp={() => setRegister(!register)}
          />
        )}
        {register && (
          <RegisterForm
            onLogin={() => setRegister(!register)}
            onRegister={onRegister}
          />
        )}
      </div>
    </LoginContainer>
  );
};

export default Login;
