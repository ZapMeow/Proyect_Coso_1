import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProductService from '../services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css';

const PRIMARY_BG_COLOR = '#000000'; 
const ELECTRIC_BLUE = '#1E90FF';    
const NEON_GREEN = '#39FF14';      
const TEXT_COLOR = '#F8F8FF';       
const CARD_BG_COLOR = '#1A1A1A';    

const ProductForm = () => {
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [stockProduct, setStockProduct] = useState('');
    const { idProduct } = useParams();
    const navigate = useNavigate();

    const neonGreenBtnStyle = {
        backgroundColor: NEON_GREEN,
        borderColor: NEON_GREEN,
        color: PRIMARY_BG_COLOR,
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
    };
    
    const electricBlueLinkStyle = {
        color: ELECTRIC_BLUE, 
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    };

    const inputStyle = {
        backgroundColor: 'transparent',
        border: '1px solid #333',
        color: TEXT_COLOR,
        boxShadow: `0 0 5px ${ELECTRIC_BLUE}`
    };

    useEffect(() => {
        if (idProduct) {
            ProductService.getAdminProductById(idProduct).then(response => {
                setNameProduct(response.data.nameProduct);
                setPriceProduct(response.data.priceProduct);
                setDescriptionProduct(response.data.descriptionProduct);
                setStockProduct(response.data.stockProduct);
                setUrlImage(response.data.urlImage);
            }).catch(error => {
                if (error.response?.status === 401){
                    localStorage.clear();
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoRole';           
                }else{
                    console.error("Error fetching product:", error);
                }
                
            });
        }
    }, [idProduct]);

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();
        const product = { nameProduct, priceProduct, descriptionProduct, urlImage, stockProduct };

        if (idProduct) {
            ProductService.updateProduct(idProduct, product).then(() => {
                navigate('/products');
            }).catch(error => {
                if (error.response?.status === 401){
                    localStorage.clear();
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoSession';           
                }else if(error.response?.status === 403){
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoRole';
                }else{
                    console.error("Error updating product:", error);
                }
            });
        } else {
            ProductService.createProduct(product).then(() => {
                navigate('/products');
            }).catch(error => {
                if (error.response?.status === 401){
                    localStorage.clear();
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoSession';           
                }else if(error.response?.status === 403){
                    window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoRole';
                }else{
                    console.error("Error creating product:", error);
                }
            });
        }
    };

    const title = idProduct ? 'Editar Producto' : 'Añadir Nuevo Producto';

    return (
        <div 
            className="min-vh-100 p-4" 
            style={{ backgroundColor: PRIMARY_BG_COLOR, color: TEXT_COLOR }}
        >
            <div className="container py-5">
                <div className="mb-4 d-flex justify-content-between">
                    <Link to="/products" style={electricBlueLinkStyle}>
                        <span role="img" aria-label="lista">⬅️</span> Volver a la Lista de Productos
                    </Link>
                    <Link to="/" style={electricBlueLinkStyle}>
                        Ir a la Tienda <span role="img" aria-label="tienda"></span>
                    </Link>
                </div>

                <div 
                    className="card shadow-lg mx-auto" 
                    style={{ 
                        backgroundColor: CARD_BG_COLOR, 
                        maxWidth: '700px', 
                        border: `1px solid ${ELECTRIC_BLUE}` 
                    }}
                >
                    <div className="card-body p-md-5">
                        <h2 className="card-title text-center mb-4 display-6" style={{ color: NEON_GREEN }}>
                            {title}
                        </h2>
                        
                        <form onSubmit={saveOrUpdateProduct}>
                            
                            <div className="mb-3">
                                <label htmlFor="nameProduct" className="form-label" style={{ color: TEXT_COLOR }}>
                                    Nombre del Producto:
                                </label>
                                <input 
                                    type="text" 
                                    id="nameProduct"
                                    className="form-control"
                                    value={nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)}
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="priceProduct" className="form-label" style={{ color: TEXT_COLOR }}>
                                        Precio del Producto:
                                    </label>
                                    <input 
                                        type="number" 
                                        id="priceProduct"
                                        className="form-control"
                                        value={priceProduct}
                                        onChange={(e) => setPriceProduct(e.target.value)}
                                        style={inputStyle}
                                        
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="stockProduct" className="form-label" style={{ color: TEXT_COLOR }}>
                                        Stock del Producto:
                                    </label>
                                    <input 
                                        type="number" 
                                        id="stockProduct"
                                        className="form-control"
                                        value={stockProduct}
                                        onChange={(e) => setStockProduct(e.target.value)}
                                        style={inputStyle}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="descriptionProduct" className="form-label" style={{ color: TEXT_COLOR }}>
                                    Descripción del Producto:
                                </label>
                                <textarea
                                    id="descriptionProduct"
                                    className="form-control"
                                    value={descriptionProduct}
                                    onChange={(e) => setDescriptionProduct(e.target.value)}
                                    style={inputStyle}
                                    rows="3"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="urlImage" className="form-label" style={{ color: TEXT_COLOR }}>
                                    Link Imagen del Producto (URL):
                                </label>
                                <input 
                                    type="text" 
                                    id="urlImage"
                                    className="form-control"
                                    value={urlImage}
                                    onChange={(e) => setUrlImage(e.target.value)}
                                    style={inputStyle}
                                    required
                                />
                                {urlImage && (
                                    <small className="form-text text-muted d-block mt-2" style={{ color: ELECTRIC_BLUE }}>
                                        <span role="img" aria-label="vista previa">👁️</span> Previsualización de la imagen:
                                        <div className="mt-2" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                            <img 
                                                src={urlImage} 
                                                alt="Previsualización" 
                                                className="img-fluid rounded" 
                                                style={{ border: `1px solid ${NEON_GREEN}` }} 
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                        </div>
                                    </small>
                                )}
                            </div>
                            
                            <div className="d-grid gap-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-lg mt-3" 
                                    style={neonGreenBtnStyle}
                                >
                                    {idProduct ? 'Actualizar Producto' : 'Guardar Producto'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;