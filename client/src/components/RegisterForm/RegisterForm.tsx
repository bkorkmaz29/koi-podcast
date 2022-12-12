import { useState } from "react";

import { StyledRegisterForm } from "./RegisterForm.styled";

interface Props {
  onRegister: Function;
  onLogin: React.MouseEventHandler<HTMLButtonElement>;
}

const RegisterForm: React.FC<Props> = ({ onRegister, onLogin }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    onRegister({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <StyledRegisterForm onSubmit={onSubmit}>
      <h2>Register</h2>
      <div className="form-input">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-input">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="Enter Email"
        />
      </div>
      <div className="form-input">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="Enter Password"
        />
      </div>
      <div className="form-buttons">
        <button className="register-button" type="submit" value="Register">
          Sign Up
        </button>
        <button className="login-button" onClick={onLogin}>
          Log in with your account
        </button>
      </div>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
