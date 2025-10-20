<<<<<<< HEAD
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../css/AuthForm.css'

function LoginPage() {

  const navigate = useNavigate();
  const handleLogin = (email) => {
    navigate('/');
  }
    

  return (
      <AuthForm mode="login" onAuth={handleLogin} />
  );
=======
import React from "react";

function LoginPage(){
    return(
        <p>Login</p>
    );
>>>>>>> 845d17b81f7c48dc6d03e966000eed9352c16308
}
export default LoginPage;