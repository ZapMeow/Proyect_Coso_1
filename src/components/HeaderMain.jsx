import Logo from '../assets/Level-Up.png'
import '../css/main.css'

function FilterProducts() {
    return (
        <header>
        <nav>
            <img src={Logo} alt="" srcset=""/>
            <a href="">Inicio</a>
            <a href="#contacto">Contacto</a>
            <a href="#contacto">Redes sociales</a>
        </nav>
        <div className="sesion">
            <button>Registrarse</button>
        </div>
    </header>

    );
    
}
export default FilterProducts;