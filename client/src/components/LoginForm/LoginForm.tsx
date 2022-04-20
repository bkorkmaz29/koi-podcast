import { useState } from "react";

import { StyledLoginForm } from "./LoginForm.styled";

interface Props {
  onLogin: Function;
  onSignUp: React.MouseEventHandler<HTMLButtonElement>;
}

const LoginForm: React.FC<Props> = ({ onLogin, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    onLogin({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <StyledLoginForm onSubmit={onSubmit}>
      <h2>Log In</h2>
      <div className="form-input">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <div className="checkbox">
          <input type="checkbox" />
          <label>Remember Me</label>
        </div>
        <button className="login-button" type="submit" value="Login">
          Sign In
        </button>
        <button className="signup-button" onClick={onSignUp}>
          No account? Sign Up!
        </button>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
