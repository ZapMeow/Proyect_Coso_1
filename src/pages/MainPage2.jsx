import '../css/MainPage2.css'

import PointsProfile from '../components/PointsProfile'

import Logo from '../assets/Level-Up.png'
import CatanImage from '../assets/products/catan.png'
import ChairImage from '../assets/products/silla_aplastada.png'
import MouseImage from '../assets/products/mouse.png'
import MousepadImage from '../assets/products/mousepad.png'
import JimboPlushImage from '../assets/products/jimboplush.png'

import UnrailedImage from '../assets/news/unrailed.jpg'

function MainPage2(){
    return(
        <>
            <header>
                <div className='image'>
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Productos</a>
                    <a href="">Contacto</a>
                    <a href="">Redes sociales</a>
                    <a href="">Noticias</a>
                    <a href="">Nosotros</a>
                </nav>
                <div className='session'>
                    <button>Registrarse</button>
                    <button>Iniciar sesion</button>
                </div>
            </header>

            <PointsProfile 
                isLogged = {true}
                range = {'Esmerald'}
                points = {90}

            />

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
                    <button>Filtrar</button>
                </div>
                <div className="products">
                    <div className="product tablegame">
                        <img src={CatanImage} alt="catan" />
                        <h1>Catan</h1>
                        <a href="">Nose inc.</a>
                        <p>$29.990</p>
                        <p className="description">Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.</p>
                        <div className="buttons">
                            <button>Añadir al carrito</button>
                            <button>⭐</button>
                        </div>
                    </div>
                    <div className="product chair">
                        <img src={ChairImage} alt="silla" />
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
                        <img src={MouseImage} alt="mouse" />
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
                        <img src={MousepadImage} alt="mousepad" />
                        <h1>Razer Goliathus Extended Chroma</h1>
                        <a href="">MausePad inc.</a>
                        <p>$29.990</p>
                        <p className="description">Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.</p>
                        <div className="buttons">
                            <button>Añadir al carrito</button>
                            <button>⭐</button>
                        </div>
                    </div>
                    <div className="product plush">
                        <img src={JimboPlushImage} alt="jimboplush" />
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
                    <h1>¿Donde nos ubicamos?</h1>
                    <p>Nos ubicamos en San Antonio justo en la casa de Marco Antonio Rojas</p>
                </div>
                <div className="eventLocation">
                    <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!4v1757474516485!5m2!1ses!2scl!6m8!1m7!1smchyYqMYbseAPbJ3bQnP0g!2m2!1d-33.56669449337895!2d-71.60751753229376!3f307.84117539758273!4f-12.671811096800354!5f0.7820865974627469" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <h1>Noticias recientes</h1>
            <div className='news'>
                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

                <div className='new'>
                    <h1>Unrailed</h1>
                    <img src={UnrailedImage} alt="" />
                    <p>unrailed es un juego</p>
                </div>

            </div>
            
            <h1>Acerca de nosotros</h1>
            <div className="aboutUs">
                <div className="conteiner1">
                    <h1>¿Quienes somos?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel harum, sint sapiente, minima aperiam quod enim beatae ea aut nam, atque eveniet nemo sed nihil ipsa delectus suscipit? Molestiae, commodi?</p>
                </div>
                <div className="conteiner2">
                    <h1>¿Donde nos ubicamos?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eveniet similique accusantium velit iste illo omnis aspernatur nulla harum architecto doloribus eaque deleniti earum veniam consequatur temporibus, laboriosam quos aut.</p>
                </div>
                <div className="conteiner3">
                    <h1>Nuestra mision</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi cumque eum minus quas culpa eos hic ullam? Maiores illum eaque voluptatem dolorem eveniet, culpa ab officiis corrupti voluptate laborum?</p>
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
export default MainPage2;