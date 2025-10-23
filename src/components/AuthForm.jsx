import React from 'react';
import { useState } from 'react';

function AuthForm({ mode = 'login', onAuth }) {

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

  const submit = (p) => {
    p.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (isRegister) {
      if (!birthDate) {
        setError('Debes ingresar tu fecha de nacimiento.');
        return;
      }

      const age = calculateAge(birthDate);
      if (age < 18) {
        setError('Debes tener al menos 18 años para registrarte.');
        return;
      }

      if (users[email]) {
        setError('El correo ya esta registrado.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return;
      }

      const usernameUsed = Object.values(users).some(p => p.username === username);
      if (usernameUsed) {
        setError('El nombre de usuario ya está ocupado');
        return;
      }

      const typeUser = getUserType(email);

      users[email] = { username, password, birthDate, typeUser };
      localStorage.setItem('users', JSON.stringify(users));

      setUserType(typeUser);
      onAuth(email);
      
    } else {
      if (!users[email] || users[email].username !== username ||users[email].password !== password) {
        setError('Credenciales incorrectas.');
        return;
      }
      var logged = true;
      var body = {username: username, password: password, email: email, typeUser: users[email].typeUser, points: 0, range: 'Hierro'};
      localStorage.setItem('logged', JSON.stringify(logged));
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser', JSON.stringify(body));

      onAuth(email);
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