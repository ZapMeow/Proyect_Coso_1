import axios from "axios";

const BASE_URL = 'http://localhost:9090/api/product'

class ProductService{

    getAllProducts() {
        return axios.get(BASE_URL + "/getAllProducts");
    }

    getProductById(id, token){
        return axios.get(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    createProduct(newProduct, token){
        return axios.post(BASE_URL, newProduct, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    updateProduct(id, productToUpdate, token){
        return axios.put(`${BASE_URL}/${id}`, productToUpdate, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    deleteProduct(id, token){
        return axios.delete(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } 
}
export default new ProductService();