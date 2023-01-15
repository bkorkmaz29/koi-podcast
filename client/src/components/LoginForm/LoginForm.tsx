import React from "react";
import { useState } from "react";
import { useForm, Resolver } from 'react-hook-form';
import { StyledLoginForm } from "./LoginForm.styled";

type FormValues = {
  email: string;
  password: string;
};

interface Props {
  onLogin: Function;
  onSignUp: React.MouseEventHandler<HTMLButtonElement>;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
      
  };
};

const LoginForm: React.FC<Props> = ({ onLogin, onSignUp }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(async (data) => await onLogin(data));
  
 
  return (
    <StyledLoginForm>
      <form onSubmit={onSubmit}>
        <h2>Log In</h2>
        <div className="form-input">
          <label>Email</label>
          <input type="text" {...register("email")} placeholder="test@test.com" />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="testest" />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-buttons">
          <div className="checkbox">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <button className="login-button" type="submit" value="Login">
            Sign In
          </button>
          <button className="signup-button" type="button" onClick={onSignUp}>
            No account? Sign Up!
          </button>
        </div>
      </form>
    </StyledLoginForm>
  );
};



export default LoginForm;
