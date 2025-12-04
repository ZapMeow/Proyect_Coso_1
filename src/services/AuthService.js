import axios from 'axios';

const AUTH_URL = 'http://localhost:9090/api/auth';

export async function login(username, password) {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, { 
      username, 
      password 
    });
    
    const { token, username: user, role, premium, points, range, email } = response.data;
    
    // Guardar en localStorage
    localStorage.setItem('id', response.data.id);
    localStorage.setItem('logged', 'true');
    localStorage.setItem('token', token);
    localStorage.setItem('username', user);
    localStorage.setItem('role', role);
    localStorage.setItem('premium', premium);
    localStorage.setItem('points', points);
    localStorage.setItem('range', range);
    localStorage.setItem('email', email);
    
    return { token, username: user, role, premium, points, range, email };
  } catch (error) {
    console.error('Login falló:', error.response?.data || error.message);
    throw error;
  }
}

export async function register(username, password, role = 'USER', email, typeUser, points, range) {
  try {

    const jsonToSend = {
      username,
      password,
      role,
      email,
      typeUser,
      points,
      range
    }

    console.log(jsonToSend)

    const response = await axios.post(`${AUTH_URL}/register`, jsonToSend);
    return response.data;
  } catch (error) {
    console.error('Registro falló:', error.response?.data || error.message);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem('logged');
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
  localStorage.removeItem('premium');
  localStorage.removeItem('points');
  localStorage.removeItem('range');
  localStorage.removeItem('email');
}

export async function getUserByUsername(username) {
  try {
    //alert("founding user " + `${AUTH_URL}/getUser/${username}`);
    const response = await axios.get(`${AUTH_URL}/getUser/${username}`);
    //alert("response " + response.data.found);
    return response.data.found;
  } catch (error) {
    return false;
  }
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function getUsername() {
  return localStorage.getItem('username');
}

export function getRole() {
  return localStorage.getItem('role');
}

export function isAdmin() {
  return localStorage.getItem('role') === 'ADMIN';
}