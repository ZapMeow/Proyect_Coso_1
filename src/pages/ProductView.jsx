import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

function ProductView() {

    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [stockProduct, setStockProduct] = useState(0);
    const [loading, setLoading] = useState(true);
    const { idProduct } = useParams();
    const navigate = useNavigate();

    const colorAzulElectrico = '#1E90FF'; 
    const colorVerdeNeon = '#39FF14';  

    useEffect(() => {
        if (idProduct) {
            setLoading(true);
            ProductService.getProductById(idProduct).then(response => {
                const data = response.data;
                setNameProduct(data.nameProduct);
                setPriceProduct(data.priceProduct);
                setDescriptionProduct(data.descriptionProduct);
                setStockProduct(data.stockProduct);
                setUrlImage(data.urlImage);
                setLoading(false);
            }).catch(error => {
                if (error.response?.status === 401){
                    alert("401 token invalido o expirado");
                    localStorage.clear();
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOut';           
                }else{
                    console.error("Error al obtener el producto:", error);
                    alert("Error al obtener el producto");
                }
                
            });
        }
    }, [idProduct]);

    if (loading) {
        return (
            <div 
                className="text-center p-5" 
                style={{ backgroundColor: '#000000', minHeight: '100vh', color: colorVerdeNeon }}
            >
                <div className="spinner-border" style={{color: colorVerdeNeon}} role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-3">Cargando información del producto...</p>
            </div>
        );
    }

    const availableStock = parseInt(stockProduct, 10) > 0;
    const priceFormatted = `$${parseFloat(priceProduct).toFixed(2)}`;

    return (
        <div 
            style={{ backgroundColor: '#000000', minHeight: '100vh' }} 
            className="py-5"
        > 
            <div className="container">
                <div 
                    className="card shadow-lg border-0" 
                    style={{ 
                        backgroundColor: '#111111', 
                        color: '#f0f0f0',
                        boxShadow: `0 0 25px rgba(30, 144, 255, 0.3)`
                    }}
                >
                    <div className="card-body p-4 p-md-5">
                        <div className="row g-4">
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img 
                                    src={urlImage} 
                                    alt={nameProduct} 
                                    className="img-fluid rounded shadow-lg" 
                                    style={{
                                        maxWidth: '450px',
                                        border: `3px solid ${colorAzulElectrico}` 
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <h1 
                                    className="display-5 fw-bold mb-2"
                                    style={{ color: colorVerdeNeon }}
                                >
                                    {nameProduct}
                                </h1>
                                <p 
                                    className="h3 fw-bold pb-2"
                                    style={{ color: colorAzulElectrico, borderBottom: `2px solid ${colorAzulElectrico}` }} // Azul Eléctrico para el precio
                                >
                                    {priceFormatted}
                                </p>
                                <h5 className="mt-4 mb-2">Descripción:</h5>
                                <p className="text">{descriptionProduct}</p>
                                <div className="mb-4 mt-3">
                                    <span className="fw-bold" style={{color: colorAzulElectrico}}>Stock: </span>
                                    {availableStock ? (
                                        <span className="fw-semibold" style={{ color: colorVerdeNeon }}>
                                            ¡En Stock! ({stockProduct} unidades) 🟢
                                        </span>
                                    ) : (
                                        <span className="text-danger fw-semibold">
                                            Agotado 🔴
                                        </span>
                                    )}
                                </div>
                                <button 
                                    className="btn btn-lg fw-bold w-100 mb-3"
                                    disabled={!availableStock}
                                    style={{ 
                                        backgroundColor: colorAzulElectrico,
                                        color: '#000000',
                                        border: 'none'
                                    }}
                                >
                                    {availableStock ? '🛒 Agregar al Carrito' : 'Agotado'}
                                </button>
                                <Link 
                                    to="/" 
                                    className="btn btn-link text-decoration-none p-0"
                                    style={{ color: colorVerdeNeon }}
                                >
                                    ⬅️ Volver a la Lista de Productos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;