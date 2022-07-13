import SignInUx from "./SignIn";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onSignInClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(JSON.stringify(formValues));
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/login");
  }
  return (
    <SignInUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
    />
  );
}
export default SignIn;