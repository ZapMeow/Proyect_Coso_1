import React from 'react';
import { useState } from 'react';
import {login, register} from '../services/AuthService';

import { useNavigate } from 'react-router-dom';


function AuthForm({ mode = 'login', onAuth }) {

  const navigate = useNavigate();

  const role = "USER";
  const points = "0";
  const range = "Hierro";

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const isRegister = mode === 'register';

  const calculateAge = (dateString) => {
    const today = new Date();
    const birth = new Date(dateString);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const getUserType = (email) => {
    if (email.endsWith('@duocuc.cl')) return 'duocuc'
    else return 'normal';
  };

  const submit = async (p) => {
  p.preventDefault();
  setError('');

  if (isRegister) {

    if (username.length < 3) {
      console.log("el nombre de usuario es muy corto");
      setError('El nombre de usuario debe tener al menos 3 caracteres.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const age = calculateAge(birthDate);
    if (age < 18) {
      setError('Debes tener al menos 18 años para registrarte.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const typeUser = getUserType(email);

    try {
      const response = await register(
        username,
        password,
        role,
        email,
        typeUser,
        points,
        range
      );

      console.log('Registro exitoso:', response);
      onAuth(response); // recomendable
    } catch (err) {
      setError(err.response?.data?.error || 'El registro falló.');
    }

  } else {

    try {
      const response = await login(username, password);

      console.log('Inicio de sesión exitoso:', response);
      console.log(localStorage.getItem('role')) 
      if (localStorage.getItem('role') === 'ADMIN'){
        navigate("/products");
        return;
      }

      onAuth(response); // recomendable
    } catch (err) {
      setError(err.response?.data?.error || 'Credenciales incorrectas.');
    }
  }
};

  return (
    <>
    <div className="auth-container">
      <h2>{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</h2>
      <form className="auth-form" onSubmit={submit}>
        
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        

        {isRegister && (
          <>

            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => {
          setEmail(e.target.value);
          if (isRegister) {
            setUserType(getUserType(e.target.value));
          }
          }}
          required
        />

            <input
              type="date"
              placeholder="Fecha de nacimiento"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />

            {userType === 'duocuc' && (
              <p style={{ color: '#39FF14', fontWeight: 'bold' }}>
                Se detectó correo especial: <strong>DUOCUC</strong>.
              </p>
            )}
          </>
        )}

        <button type="submit">{isRegister ? 'Crear cuenta' : 'Entrar'}</button>
        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
    </>
  );
}

export default AuthForm;