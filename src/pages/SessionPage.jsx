import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../css/AuthForm.css'
import { Link } from 'react-router-dom';
import Logo from '../assets/products/Level-Up.png';
import React from 'react';
import FooterPage from '../components/FooterPage';

function SessionPage() {

  const navigate = useNavigate();
  const handleRegister = (email) => {
    navigate('/login')
  };

  return (
    <>
    <header style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Link to='/' className='button-permanent'>Pagina principal</Link>
      <img src={Logo} alt="" />
      <Link to='/login' className='button-permanent'>Iniciar sesion</Link>
    </header>
    <AuthForm mode="register" onAuth={handleRegister}/>
    <FooterPage 
      links={false}
    />
    </>
  );
}

export default SessionPage;