import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/ProductCard.css'
import React from 'react';

function ProductCard({ title, distributor, distributorLink, price, description, category, rating, image }) {
    return (
        <div className={`card ${category} current-card`}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body current-body">
                <h5 className="card-title">{title}</h5>
                <a href={distributorLink}>{distributor}</a>
                <h2>${price}</h2>
                <h4>{rating}/10 ⭐</h4>
                <p className="card-text">{description}</p>
                <div className='buttons'>
                    <button>Agregar</button><button>Calificar</button>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;