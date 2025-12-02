import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

function ProductPage(){

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

    return(
        <>

        <p>ProductPage</p>
        <p>{nameProduct}</p>
        <p>{priceProduct}</p>
        <p>{descriptionProduct}</p>
        <p>{urlImage}</p>
        <p>{stockProduct}</p>
        <Link to="/products">Products</Link>
        </>
    )
}
export default ProductPage;

