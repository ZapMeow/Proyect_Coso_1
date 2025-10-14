import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/ProductCard.css'

function ProductCard({ title, distributor, distributorLink, description, category, rating, image }) {
    return (
        <div className={`card ${category}`} style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={distributorLink}>{distributor}</a>
                <h4>{rating}/10</h4>
                <p className="card-text">{description}</p>
                <div>
                    <button>Agregar</button><button>Calificar</button>
                </div>
                <a href={distributorLink} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default ProductCard;