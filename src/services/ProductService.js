import axios from "axios";

const BASE_URL = 'http://localhost:9090/api/product'

class ProductService{

    getAllProducts() {
        return axios.get(BASE_URL + "/getAllProducts");
    }

    getProductById(id){
        return axios.get(`${BASE_URL}/${id}`)
    }

    createProduct(newProduct){
        return axios.post(BASE_URL, newProduct);
    }

    updateProduct(id, productToUpdate){
        return axios.put(`${BASE_URL}/${id}`, productToUpdate);
    }

    deleteProduct(id){
        return axios.delete(`${BASE_URL}/${id}`);
    } 
}
export default new ProductService();