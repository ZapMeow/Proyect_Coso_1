import CustomInput from "../components/CustomInput";
import CustomNavBar from "../components/CustomNavBar";
import CustomNavButton from '../components/CustomNavButton';
import Logo from '../assets/Level-Up.png';

import '../css/headerNavigation.css';


function MainPage(){
    return(
        <>
            <header className="header-navigation">
                <img src={Logo} alt="Level Up Logo" />
                <CustomNavBar links={[
                    { name: "Home", url: "#" },
                    { name: "Products", url: "#" },
                    { name: "About us", url: "#" },
                    { name: "Contact", url: "#" },
                    { name: "Help", url: "#" },
                    { name: "Blog", url: "#" }
                ]} />
                <CustomNavButton links={[
                    { name: "Login", type: "button" },
                    { name: "Sign Up", type: "button" }
                ]} />
            </header>

            <div className="levelPoints">
                <h1>Puntos Level up: ?</h1>
                <h2>Rango:           ?</h2>
                <div className="bar">
                <div className="progressBar"><p>?</p></div>
            </div>
                <p>Necesita crear una cuenta para ver sus datos</p>
                <button onclick="window.location.href='session.html'">Registrarse</button>
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
            <button id="filter" onclick="filter()">Filtrar</button>
        </div>
        <div className="products">
            <div className="product tablegame">
                <img src="../img/catan.png" alt="catan" />
                <h1>Catan</h1>
                <a href="">Nose inc.</a>
                <p>$29.990</p>
                <p className="description">Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product tablegame">
                <img src="../img/Carcassonne.webp" alt="Carcassonne" />
                <h1>Carcassonne</h1>
                <a href="">Nose inc.</a>
                <p>$24.990</p>
                <p className="description">Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product accessory">
                <img src="../img/xboxcontroller-removebg-preview.png" alt="xboxcontroller" />
                <h1>Controlador Inalámbrico Xbox Series X</h1>
                <a href="">Maicrosoft</a>
                <p>$59.990</p>
                <p>Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product console">
                <img src="../img/ps5-removebg-preview.png" alt="ps5" />
                <h1>PlayStation 5</h1>
                <a href="">Humo inc.</a>
                <p>$549.990</p>
                <p className="description">La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
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
            <div className="product pc">
                <img src="../img/asuspc.png" alt="asuspc" />
                <h1>ASUS ROG Strix</h1>
                <a href="">PC inc.</a>
                <p>$1.299.990</p>
                <p className="description">Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product chair">
                <img src="../img/silla-removebg-preview.png" alt="silla" />
                <h1>Secretlab Titan</h1>
                <a href="">Silla inc.</a>
                <p>$349.990</p>
                <p className="description">Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product mouse">
                <img src="../img/mouse-removebg-preview.png" alt="mouse" />
                <h1>Logitech G502 HERO</h1>
                <a href="">Mause inc.</a>
                <p>$49.990</p>
                <p className="description">Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product mousepad">
                <img src="../img/mousepad-removebg-preview.png" alt="mousepad" />
                <h1>Razer Goliathus Extended Chroma</h1>
                <a href="">MausePad inc.</a>
                <p>$29.990</p>
                <p className="description">Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.</p>
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
            <div className="product plush">
                <img src="../img/jimboplush-removebg-preview.png" alt="jimboplush" />
                <h1>Balatro Jimbo</h1>
                <a href="">Balatro inc.</a>
                <p>$20.000.000</p>
                <p className="description">Es el jimbo peluche Es el jimbo peluche Es el jimbo peluche Es el jimbo peluche Es el jimbo peluche Es el jimbo peluche Es el jimbo peluche</p>
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
                <a href="https://linkedin.com/"><span className="fa-brands fa-linkedin"></span>Linkedin</a>
                <a href="https://www.facebook.com/"><span className="fa-brands fa-facebook"></span>Facebook</a>
                <a href="https://www.jetbrains.com/es-es/idea/download/?section=windows"><span className="fa-sharp fa-solid fa-code"></span>IntellijIDEA</a>
        </div>
        <div className="tecnicSupport">
            <h1>Contacto</h1>
                <a href="https://wa.me/123456789"><span className="fa-brands fa-whatsapp"></span>Whatsapp</a>
                <a href="mailto:correoejemplo@gmail.com"><span className="fa-solid fa-envelope"></span>Gmail</a>
        </div>
    </footer>
        </>
    );
}
export default MainPage;