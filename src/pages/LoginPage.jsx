import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../css/AuthForm.css'

import React from 'react';

function LoginPage() {

  const navigate = useNavigate();
  const handleLogin = (email) => {
    navigate('/');
  }
    

  return (
      <AuthForm mode="login" onAuth={handleLogin} />
  );
}
export default LoginPage;