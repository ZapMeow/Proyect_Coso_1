   import React, { useState, useEffect } from 'react';
   import { useParams, useNavigate, Link } from 'react-router-dom';
   import ProductService from '../services/ProductService';

   const ProductForm = () => {
       const [nameProduct, setNameProduct] = useState('');
       const [priceProduct, setPriceProduct] = useState('');
       const [descriptionProduct, setDescriptionProduct] = useState('');
       const [urlImage, setUrlImage] = useState('');
       const [stockProduct, setStockProduct] = useState('');
       const { idProduct } = useParams();
       const navigate = useNavigate();

       useEffect(() => {
           if (idProduct) {
               ProductService.getProductById(idProduct).then(response => {
                   setNameProduct(response.data.nameProduct);
                   setPriceProduct(response.data.priceProduct);
                   setDescriptionProduct(response.data.descriptionProduct);
                   setStockProduct(response.data.stockProduct);
                   setUrlImage(response.data.urlImage);
               });
           }
       }, [idProduct]);

       const saveOrUpdateProduct = (e) => {
           e.preventDefault();
           const product = {nameProduct, priceProduct, descriptionProduct, urlImage, stockProduct };

           console.log(product)
           if (idProduct) {
               ProductService.updateProduct(idProduct, product).then(() => {
                   navigate('/products');
               });
           } else {
               ProductService.createProduct(product).then(() => {
                   navigate('/products');
               });
           }
       };

       return (
        <>
        <Link to="/products">Products</Link>
           <div>
               <h2>{idProduct ? 'Editar producto' : 'Añadir producto'}</h2>
               <form onSubmit={saveOrUpdateProduct}>
                   <div>
                       <label>Nombre del producto:</label>
                       <input 
                           type="text" 
                           value={nameProduct}
                           onChange={(e) => setNameProduct(e.target.value)}
                           required
                       />
                   </div>
                   <div>
                       <label>Precio del producto:</label>
                       <input 
                           type="number" 
                           value={priceProduct}
                           onChange={(e) => setPriceProduct(e.target.value)}
                           required
                       />
                   </div>
                   <div>
                        <label>Descripcion del producto</label>
                        <input type="text" 
                        value={descriptionProduct}
                        onChange={(e) => setDescriptionProduct(e.target.value)}
                        required
                        />
                   </div>
                   <div>
                        <label>Link imagen del producto</label>
                        <input type="text" 
                        value={urlImage}
                        onChange={(e) => setUrlImage(e.target.value)}
                        required
                        />
                   </div>
                   <div>
                        <label>Stock del producto</label>
                        <input type="number" 
                        value={stockProduct}
                        onChange={(e) => setStockProduct(e.target.value)}
                        required
                        />
                   </div>
                   <button type="submit">{idProduct ? 'Update' : 'Save'}</button>
               </form>
           </div>
            <Link to="/">Ir a las compras</Link>
           </>
       );
   };

   export default ProductForm;
