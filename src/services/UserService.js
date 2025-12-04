import axios from "axios";

const BASE_URL = "http://localhost:9090/api/users";

export async function getUserByUsername(username) {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`)
        console.log(response.data.username);
        alert("Usuario: " + response.data.username + " id: " + response.data.id);
    }catch (error) {
        console.error('Error fetching user:', error.response?.data || error.message);
        throw error;
    }
}

export async function updateUser(id, userData) {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, userData)
        localStorage.setItem('username', userData.username);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('premium', userData.premium);
        localStorage.setItem('points', userData.points);
        localStorage.setItem('range', userData.range);
        localStorage.setItem('email', userData.email);
    }catch (error) {
        console.error('Error updating user:', error.response?.data || error.message);
        throw error;
    }
}

export async function getUserById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/getUserById/${id}`)
        return response.data;
    }catch (error) {
        console.error('Error fetching user by ID:', error.response?.data || error.message);
        throw error;
    }
}