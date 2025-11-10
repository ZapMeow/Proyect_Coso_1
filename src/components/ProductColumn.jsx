   import React, { useState, useEffect } from 'react';
   import { Link } from 'react-router-dom';
   import ProductService from '../services/ProductService'; 

   const ProductColumn = () => {
       const [products, setProducts] = useState([]);

       useEffect(() => {
           fetchProducts();
       }, []);

       const fetchProducts = () => {
           ProductService.getAllProducts().then(response => {
               setProducts(response.data);
               console.log(response)
           }).catch(error => {
               console.log('Error fetching products:', error);
           });
       };

       const deleteProduct = (id) => {
           ProductService.deleteProduct(id).then(() => {
               fetchProducts();
           }).catch(error => {
               console.log('Error deleting product:', error);
           });
       };

       return (
           <div>
               <h2>Lista de productos</h2>
               <Link to="/add">Añadir nuevo producto</Link>
               <table>
                   <thead>
                       <tr>
                           <th>Titulo</th>
                           <th>precio</th>
                           <th>Imagen</th>
                       </tr>
                   </thead>
                   <tbody>
                       {products.map(product => (
                           <tr key={product.idProduct}>
                                <td>{product.idProduct}</td>
                               <td>{product.nameProduct}</td>
                               <td>{product.priceProduct}</td>
                               <td>
                                   <Link to={`/edit/${product.idProduct}`}>Edit</Link>
                                   <button onClick={() => deleteProduct(product.idProduct)}>Delete</button>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       );
   };
   export default ProductColumn;

