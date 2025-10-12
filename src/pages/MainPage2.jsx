import '../css/MainPage2.css'

function MainPage2(){
    return(
        <>
            <header>
                <nav>
                    <img srcSet="../img/Level-Up.png" alt="" />
                    <a href="">Inicio</a>
                    <a href="#contacto">Contacto</a>
                    <a href="#contacto">Redes sociales</a>
                </nav>
                <div className="sesion">
                    <button>Registrarse</button>
                </div>
            </header>

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
                    <button>Filtrar</button>
                </div>

                <div className="products">
                    <div className="product tablegame">
                        <img srcSet="../img/catan.png" alt="catan" />
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
                <img srcSet="../img/silla-removebg-preview.png" alt="silla" />
                <h1>Secretlab Titan</h1>
                <a href="">Silla inc.</a>
                <p>$349.990</p>
                <p className="description">Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.</p>
                <div className="buttons">
                    <button>Añadir al carrito</button>
                    <button>⭐</button>
                </div>
            </div>
            <div className="product clothes">
                <img srcSet="../img/polera-removebg-preview.png" alt="polera" />
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
                <img srcSet="../img/jimboplush-removebg-preview.png" alt="jimboplush" />
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
            hola hola
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

    <div className="cart">
        <button>Carrito</button>
    </div>

    <footer id="contacto">
        <div className="socialMedia">
            <h1>Redes sociales</h1>
                <a href="https://linkedin.com/"><span className="fa-brands fa-linkedin"></span>Linkedin</a>
                <a href="https://www.facebook.com/"><span className="fa-brands fa-facebook"></span>Facebook</a>
                <a href="https://www.jetbrains.com/es-es/idea/download/?section=windows"><span class="fa-sharp fa-solid fa-code"></span>IntellijIDEA</a>
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