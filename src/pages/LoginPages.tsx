/* eslint-disable react/jsx-no-undef */
import { LoginForm } from '@/src/components/form/login-form.tsx';
import { useState } from 'react';
import { RegisterForm } from '../components/form/register-form';

export const LoginPages = () => {
  const [isLoginForm, setToggleForm] = useState(true);
  return (
    <>{isLoginForm ? <LoginForm setToggleForm={setToggleForm} /> : <RegisterForm setToggleForm={setToggleForm} />}</>
  );
};
