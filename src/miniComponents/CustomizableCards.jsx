//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/customizableCards.css'

function CustomizableCards({image, title, distributor, linkDistributor, body, category}) {
    return (
        <div className={`card card-custom ${category}`}>
            <img src={image} className="card-img-top" alt="null" />
            <div className="card-body card-body-custom">
                <h5 className="card-title text-white">{title}</h5>
                <a href={linkDistributor} className="text-primary">{distributor}</a>
                <p className="card-text text-white">{body}</p>
                <a href="#" className="btn btn-secondary bg-dark text-light border-2 border-light">Comprar</a>
            </div>
        </div>
    );
}
export default CustomizableCards;