import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../services/ProductService'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const PRIMARY_BG_COLOR = '#000000'; 
const ELECTRIC_BLUE = '#1E90FF';    
const NEON_GREEN = '#39FF14';     
const TEXT_COLOR = '#F8F8FF';      

const ProductColumn = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        ProductService.getAdminProducts().then(response => {
            setProducts(response.data);
            console.log(response)
        }).catch(error => {
            if (error.response?.status === 401){
                alert("401 token invalido o expirado");
                localStorage.clear();
                window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOut';           
            }else{
                console.log('Error fetching products:', error);
                console.log(error);
                alert('Error fetching products');
            }    
        });
    };

    const deleteProduct = (id) => {
        ProductService.deleteProduct(id).then(() => {
            fetchProducts();
        }).catch(error => {
            console.log('Error deleting product:', error);
        });
    };

    const linkStyle = {
        color: NEON_GREEN,
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
        marginRight: '1rem'
    };

    const neonGreenBtnStyle = {
        backgroundColor: NEON_GREEN,
        borderColor: NEON_GREEN,
        color: PRIMARY_BG_COLOR, 
        fontWeight: 'bold',
        marginRight: '0.5rem'
    };
    
    const electricBlueBtnStyle = {
        backgroundColor: ELECTRIC_BLUE,
        borderColor: ELECTRIC_BLUE,
        color: TEXT_COLOR, 
        fontWeight: 'bold',
        marginRight: '0.5rem'
    };


    return (
        <div 
            className="container-fluid min-vh-100 p-4" 
            style={{ backgroundColor: PRIMARY_BG_COLOR, color: TEXT_COLOR }}
        >
            <header className="mb-4">
                <h2 className="display-4" style={{ color: NEON_GREEN }}>
                    <span role="img" aria-label="lista">📋</span> Lista de Productos
                </h2>
                <Link 
                    to="/add" 
                    className="btn btn-lg mb-3" 
                    style={neonGreenBtnStyle}
                >
                    Añadir Nuevo Producto <span role="img" aria-label="más">➕</span>
                </Link>
            </header>
            
            <hr style={{ borderColor: ELECTRIC_BLUE }} />

            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover align-middle">
                    <thead style={{ backgroundColor: ELECTRIC_BLUE, color: PRIMARY_BG_COLOR }}>
                        <tr>
                            <th>ID</th> 
                            <th>Título</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.idProduct}>
                                <td>{product.idProduct}</td>
                                <td>{product.nameProduct}</td>
                                <td>${product.priceProduct}</td>
                                <td>
                                    <Link 
                                        to={`/edit/${product.idProduct}`}
                                        className="btn btn-sm"
                                        style={electricBlueBtnStyle}
                                    >
                                        Edit <span role="img" aria-label="editar">✏️</span>
                                    </Link>
                                    <button 
                                        onClick={() => deleteProduct(product.idProduct)}
                                        className="btn btn-sm"
                                        style={neonGreenBtnStyle}
                                    >
                                        Delete <span role="img" aria-label="borrar">🗑️</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.length === 0 && (
                    <p className="text-center mt-4 lead" style={{ color: ELECTRIC_BLUE }}>
                        No hay productos disponibles.
                    </p>
                )}
            </div>

            <hr style={{ borderColor: ELECTRIC_BLUE }} />
            
            <Link to="/" style={{...linkStyle, color: ELECTRIC_BLUE}}>
                <span role="img" aria-label="flecha izquierda">⬅️</span> Volver a los productos
            </Link>
        </div>
    );
};

export default ProductColumn;