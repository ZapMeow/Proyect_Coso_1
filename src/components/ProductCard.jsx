import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductCard(props) {
  const { code, title, distributor, distributorLink, price, description, category, rating, image } = props;

  return (
    <div className={`card text-white p-2 m-2 ${category} current-card transition`}>
      <img src={image} className="card-img-top rounded-3" alt={title} />

      <div className="card-body d-flex flex-column align-items-center current-body">
        <h5 className="card-title text-center fw-bold">{title}</h5>

        <a href={distributorLink} className="text-info fw-semibold text-decoration-none mb-2">
          {distributor}
        </a>

        <h4 className="text-light">${price}</h4>
        <h6 className="text-secondary mb-3">{rating}/10 ⭐</h6>

        <p className="card-text text-center flex-grow-1 overflow-auto">
          {description}
        </p>

        <div className="d-flex justify-content-center gap-3 mt-3 current-buttons">
          <button
            onClick={() => addToCart(props)}
          >
            Agregar
          </button>
          <button>
            Calificar
          </button>
        </div>
      </div>
    </div>
  );
}

function addToCart(props) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push(props);
  localStorage.setItem('productos', JSON.stringify(productos));
}
