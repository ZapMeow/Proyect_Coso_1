<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/ProductCard.css'
import React from 'react';
=======
import React from "react";

export default function ProductCard(props) {

    const { code, title, distributor, distributorLink, price, description, category, rating, image } = props
>>>>>>> 845d17b81f7c48dc6d03e966000eed9352c16308

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
                    <button onClick={() => {addToCart(props)}}>Agregar</button><button>Calificar</button>
                </div>
            </div>
        </div>
    );
}

function addToCart(props){

    const productos = JSON.parse(localStorage.getItem("productos")) || []
    productos.push(props)
    localStorage.setItem("productos", JSON.stringify(productos))

}