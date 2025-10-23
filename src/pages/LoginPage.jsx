import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import FooterPage from '../components/FooterPage';
import { Link } from 'react-router-dom';
import Logo from '../assets/products/Level-Up.png';
import '../css/AuthForm.css'
import '../css/loginAndRegisterButtons.css'

import React from 'react';

function LoginPage() {

  const navigate = useNavigate();
  const handleLogin = (email) => {
    navigate('/');
  }
    

  return (
    <>
    <header style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Link to='/' className='button-permanent'>Pagina principal</Link>
      <img src={Logo} alt="" />
      <Link to='/session' className='button-permanent'>Registrarse</Link>
    </header>
    <AuthForm mode="login" onAuth={handleLogin} />
    <FooterPage 
      links={false}
    />



    </>
  );
}
export default LoginPage;