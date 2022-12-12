import React from "react";
//import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { StyledLoginForm } from "./LoginForm.styled";

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
  onSignUp: React.MouseEventHandler<HTMLButtonElement>;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, onSignUp } = props;
  return (
    <StyledLoginForm>
      <Form>
        <h1>Login</h1>
        <div className="form-input">
          <label>Email</label>
          <Field type="email" name="email" />
          {touched.email && errors.email && <div>{errors.email}</div>}
        </div>
        <div className="form-input">
          <label>Password</label>
          <Field type="password" name="password" />
          {touched.password && errors.password && <div>{errors.password}</div>}
        </div>
        <div className="form-buttons">
          <button
            className="login-button"
            type="submit"
            value="Login"
            disabled={isSubmitting}
          >
            Sign In
          </button>
          <button className="signup-button" onClick={onSignUp}>
            No account? Sign Up!
          </button>
        </div>
      </Form>
    </StyledLoginForm>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
  onLogin: Function;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  },

  handleSubmit: (values, { props }) => {
    props.onLogin(values.email, values.password);
  },
})(InnerForm);

interface loginProps {
  onLogin: Function;
  onSignUp: React.MouseEventHandler<HTMLButtonElement>;
}
// Use <MyForm /> wherevs
const LoginForm: React.FC<loginProps> = ({ onLogin }, { onSignUp }) => (
  <MyForm onLogin={onLogin} onSignUp={onSignUp} />
);

export default LoginForm;
