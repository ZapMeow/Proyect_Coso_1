import api from "../api/AxiosConfig";

const BASE_URL = 'http://localhost:9090/api/product'

class ProductService{

    getAdminProducts() {
        return api.get(BASE_URL + "/getAllProducts");
    }


    getAllProducts() {
        return api.get(BASE_URL + "/getClientProducts");
    }

    getProductById(id){
        return api.get(`${BASE_URL}/${id}`);
    }

    createProduct(newProduct){
        return api.post(BASE_URL, newProduct);
    }

    updateProduct(id, productToUpdate){
        return api.put(`${BASE_URL}/${id}`, productToUpdate);
    }

    deleteProduct(id){
        return api.delete(`${BASE_URL}/${id}`);
    } 
}
export default new ProductService();