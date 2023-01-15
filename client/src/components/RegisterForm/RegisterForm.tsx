import { useState } from "react";

import { StyledRegisterForm } from "./RegisterForm.styled";
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

interface Props {
  onRegister: Function;
  onLogin: React.MouseEventHandler<HTMLButtonElement>;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email && values.name && values.password ? values : {},
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

const RegisterForm: React.FC<Props> = ({ onRegister, onLogin }) => {
   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(async (data) => await onRegister(data));


  return (
    <StyledRegisterForm>
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <div className="form-input">
          <label>Username</label>
          <input type="text" {...register("name")} placeholder="username" />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form-input">
          <label>Email</label>
          <input type="text" {...register("email")} placeholder="email" />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="password" />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-buttons">
          <button className="register-button" type="submit" value="Register">
            Sign Up
          </button>
          <button className="login-button" type='button' onClick={onLogin}>
            Log in with your account
          </button>
        </div>
      </form>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
