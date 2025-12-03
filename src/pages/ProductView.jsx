   import React, { useState, useEffect } from 'react';
   import { useParams, useNavigate, Link } from 'react-router-dom';
   import ProductService from '../services/ProductService';

   const ProductView = () => {
        const token = localStorage.getItem('token');

       const [product, setProduct] = useState(null);
       const [error, setError] = useState(null);
       const [loading, setLoading] = useState(true);
       const [nameProduct, setNameProduct] = useState('');
       const [priceProduct, setPriceProduct] = useState('');
       const [descriptionProduct, setDescriptionProduct] = useState('');
       const [urlImage, setUrlImage] = useState('');
       const [stockProduct, setStockProduct] = useState('');
       const { idProduct } = useParams();

       useEffect(() => {
           if (idProduct) {
                setLoading(true);
                ProductService.getProductById(idProduct, token)
                    .then(response => {
                        setProduct(response.data);
                        setError(null);
                    })
                    .catch(err => {
                        console.error("Error fetching product:", err);
                        if (err.response) {
                            if (err.response.status === 401 || err.response.status === 403) {
                                setError("Unauthorized: You don't have permission to view this product.");
                            } else if (err.response.status === 404) {
                                setError("Product not found.");
                            } else {
                                setError(`An error occurred: ${err.response.data.message || 'Please try again later.'}`);
                            }
                        } else {
                            setError("An error occurred while fetching the product.");
                        }
                        setProduct(null);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
           }
       }, [idProduct, token]);

       return (
        <>
            {loading && <p>Loading product...</p>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {product && !loading && !error && (
                <div>
                    <h1>{product.nameProduct}</h1>
                    <p>{product.descriptionProduct}</p>
                    <img src={product.urlImage} alt={product.nameProduct} style={{maxWidth: '400px'}} />
                    <p>Price: ${product.priceProduct}</p>
                    <p>Stock: {product.stockProduct}</p>
                </div>
            )}
            <Link to="/">Back to Main Page</Link>
        </>
       );
   };

   export default ProductView;
