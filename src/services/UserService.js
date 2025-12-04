import axios from "axios";

const BASE_URL = "http://localhost:9090/api/users";

class UserService{

    getUser = async (username) => {
        const token = localStorage.getItem('token');
        return axios.get(`${BASE_URL}/${username}`, {
            headers: {         
                authorization: `Bearer ${token}`
            }
        });
    };

    updateUser = async (id, userData, token) => {
    
    localStorage.setItem('username', userData.username);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('premium', userData.premium);
    localStorage.setItem('points', userData.points);
    localStorage.setItem('range', userData.range);
    localStorage.setItem('email', userData.email);
    
    return axios.put(`${BASE_URL}/${id}`, userData, {
    headers: {
        authorization: `Bearer ${token}`
         }
    });
};
}

export default new UserService();