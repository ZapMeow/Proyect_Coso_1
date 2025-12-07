import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const {
    idProduct,
    nameProduct,
    distributorProduct,
    linkDistributor,
    priceProduct,
    categoryProduct,
    urlImage,
  } = product;

  const navigate = useNavigate();

  const handleVisit = () => {
    navigate(`/product/${idProduct}`);
  };

  return (
    <div className={`card text-white p-2 m-2 ${categoryProduct} current-card transition`}>
      <img src={urlImage} className="card-img-top rounded-3" alt={nameProduct} />

      <div className="card-body d-flex flex-column align-items-center current-body">
        <h5 className="card-title text-center fw-bold">{nameProduct}</h5>

        <a href={linkDistributor} className="text-info fw-semibold text-decoration-none mb-2">
          {distributorProduct}
        </a>

        <h4 className="text-light">${priceProduct}</h4>
        <h6 className="text-secondary mb-3">0/10 ⭐</h6>

        <p className="card-text text-center flex-grow-1 overflow-auto">
        </p>

        <div className="d-flex justify-content-center gap-3 mt-3 current-buttons">
          <button onClick={() => addToCart(product)}>Agregar</button>
          <button onClick={handleVisit}>Visitar</button>
        </div>
      </div>
    </div>
  );
}

function addToCart(product) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push(product);
  localStorage.setItem('productos', JSON.stringify(productos));
}
