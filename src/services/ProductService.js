import api from "../api/AxiosConfig";

class ProductService{

    getAdminProducts() {
        return api.get("/product/getAllProducts");
    }

    getAllProducts() {
        return api.get("product/getClientProducts");
    }

    getProductById(id){
        return api.get(`/product/${id}`);
    }

    getAdminProductById(id){
        return api.get(`/product/getAdminProductById/${id}`);
    }

    createProduct(newProduct){
        return api.post("/product", newProduct);
    }

    updateProduct(id, productToUpdate){
        return api.put(`/product/${id}`, productToUpdate);
    }

    deleteProduct(id){
        return api.delete(`/product/${id}`);
    } 
}
export default new ProductService();