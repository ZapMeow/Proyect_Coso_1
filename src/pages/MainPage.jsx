import CustomInput from "../components/CustomInput";
import CustomNavBar from "../components/CustomNavBar";
import CustomNavButton from '../components/CustomNavButton';

import Logo from '../assets/Level-Up.png';

import { Link } from 'react-router-dom';



function MainPage(){
    return(
        <>
            <Link to='/2' >Hola</Link>

            <div className="levelPoints">
                <h1>Puntos Level up: ?</h1>
                <h2>Rango:           ?</h2>
                <div className="bar">
                <div className="progressBar"><p>?</p></div>
            </div>
                <p>Necesita crear una cuenta para ver sus datos</p>
                <button>Registrarse</button>
            </div>

            <div className="menu">
                <div className="navBar">
                    <h1>Filtros catalogo</h1>
                    <div className="filter">
                        <label htmlFor="filtrerPrice">Precio maximo de filtro</label>
                        <input type="number" name="filtrerPrice" id="filtrerPrice" placeholder="CLP format ex $999999" />
                    </div>
                    <div className="filter">
                        <label htmlFor="selectType">Categoria a filtrar</label>
                        <select name="" id="">
                            <option value="all">Todos</option>
                    <option value="tablegame">Juegos de mesa</option>
                    <option value="accessory">Accesorios</option>
                    <option value="console">Consolas</option>
                    <option value="pc">Computadores</option>
                    <option value="chair">Sillas</option>
                    <option value="mouse">Mouse</option>
                    <option value="mousepad">Mousepad</option>
                    <option value="clothes">Poleras</option>
                    <option value="plush">Plush</option>
                </select>
            </div>
            <button id="filter">Filtrar</button>
        </div>
        <div className="products">
            
            <div className="product accessory">
                <img src="../img/hyperxcloud-removebg-preview.png" alt="hyperxcloud" />
                <h1>HyperX Cloud II</h1>
                <a href="">Audifonos inc.</a>
                <p>$79.990</p>
                <p className="description">Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product clothes">
                <img src="../img/polera-removebg-preview.png" alt="polera" />
                <h1>Polera Gamer Personalizada 'Level-Up'</h1>
                <a href="">Polera inc.</a>
                <p>$14.990</p>
                <p className="description">Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            
        </div>
    </div>

    <div className="event">
        <div className="eventDescription">
            <h1>Evento gamer</h1>
            <p>Evento comunitario en San Antonio por la salida de silksong</p>
        </div>
        <div className="eventLocation">
            <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!4v1757474516485!5m2!1ses!2scl!6m8!1m7!1smchyYqMYbseAPbJ3bQnP0g!2m2!1d-33.56669449337895!2d-71.60751753229376!3f307.84117539758273!4f-12.671811096800354!5f0.7820865974627469"
            width="600"
            height="450"
            style= {{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div className="aboutUs">
        <div className="conteiner1">
            <h1>¿Quienes somos?</h1>
            <p>Somos una empresa enfocada en la distribucion de componentes electronicos enfocados en lo gaming</p>
        </div>
        <div className="conteiner2">
            <h1>¿Donde nos ubicamos?</h1>
            <p>No tenemos una tienda fisica, nuestro enfoque es completamente online a base de pedidos que nos hacen teniendo la disponibilidad mas rapida de todo chile</p>
        </div>
        <div className="conteiner3">
            <h1>Nuestra mision</h1>
            <p>Nuestra mision es distribuir productos de calidad por todo el pais y ser el mayor distribuidor.</p>
        </div>
    </div>

    <footer id="contacto">
        <div className="socialMedia">
            <h1>Redes sociales</h1>
            <CustomNavBar arrayLinks={[
                { name: "Instagram", url: "https://www.instagram.com/" },
                { name: "Twitter", url: "https://twitter.com/" },
                { name: "Linkedin", url: "https://linkedin.com/" },
                { name: "Facebook", url: "https://www.facebook.com/" },
                { name: "IntellijIDEA", url: "https://www.jetbrains.com/es-es/idea/download/?section=windows" },
            ]} flex_direction="column" />
        </div>
        <div className="tecnicSupport">
            <h1>Contacto</h1>
            <CustomNavBar arrayLinks={[
                { name: "Whatsapp", url: "https://wa.me/123456789" },
                { name: "Gmail", url: "mailto:correoejemplo@gmail.com" },
            ]} flex_direction="column" />
        </div>
        
    </footer>
        </>
    );
}
export default MainPage;