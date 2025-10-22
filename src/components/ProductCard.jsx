import React from 'react';

export default function ProductCard(props) {
  const { code, title, distributor, distributorLink, price, description, category, rating, image } = props;

  return (
    <div className={`card fixed-card mb-4 shadow-sm ${category} current-card`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-subtitle mb-2 text-muted">
                Distribuidor: <a href={distributorLink} target="_blank" rel="noopener noreferrer">{distributor}</a>
            </p>
            <h4 className="text-primary">${price}</h4>
            <p className="mb-1"><strong>Calificación:</strong> {rating}/10 ⭐</p>
            <p className="card-text flex-grow-1">{description}</p>
            <div className="d-flex justify-content-between">
                <button
                    className="btn btn-sm btn-success"
                onClick={() => addToCart(props)}
                >
                Agregar
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                Calificar
                </button>
            </div>
        </div>
    </div>
  );
}

function addToCart(props) {
  const productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push(props);
  localStorage.setItem("productos", JSON.stringify(productos));
}
