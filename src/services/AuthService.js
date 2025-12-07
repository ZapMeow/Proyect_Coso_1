import api from "../api/AxiosConfig";

const AUTH_URL = 'http://localhost:9090/api/auth';

export async function login(username, password) {
  try {
    const response = await api.post(`${AUTH_URL}/login`, { 
      username, 
      password 
    });
    
    const { token, username: user, role } = response.data;
    
    // Guardar en localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('username', user);
    localStorage.setItem('role', role); // ⭐ GUARDAR ROL
    localStorage.setItem('logged', 'true');
    localStorage.setItem('id', response.data.id);
    localStorage.setItem('points', response.data.points);
    localStorage.setItem('range', response.data.range);
    localStorage.setItem('email', response.data.email);
    localStorage.setItem('typeUser', response.data.typeUser);
    
    return { token, username: user, role };
  } catch (error) {
    console.error('Login falló:', error.response?.data || error.message);
    throw error;
  }
}

export async function register(username, password, role = 'USER', email, typeUser, points, range) {
  try {

    var isPremium = typeUser === "duocuc";

    const response = await api.post(`${AUTH_URL}/register`, { 
      username, 
      password,
      role,
      email,
      typeUser,
      points,
      range,
      isPremium
    });
    return response.data;
  } catch (error) {
    console.error('Registro falló:', error.response?.data || error.message);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('role'); // ⭐ LIMPIAR ROL
  localStorage.removeItem('logged');
}

export function isAuthenticated() {
  return !localStorage.getItem('token');
}

export function getUsername() {
  return localStorage.getItem('username');
}

export function getRole() {
  return localStorage.getItem('role'); // ⭐ OBTENER ROL
}

export function isAdmin() {
  return localStorage.getItem('role') === 'ADMIN'; // ⭐ VERIFICAR SI ES ADMIN
}

