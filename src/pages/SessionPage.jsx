import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../css/AuthForm.css'

function SessionPage() {

  const navigate = useNavigate();
  const handleRegister = (email) => navigate('/');

  return (
    <AuthForm mode="register" onAuth={handleRegister}/>
  );
}

export default SessionPage;