import { useState } from "react";
import { FakeDates } from "../components/FakeDates"
import { Link } from 'react-router-dom' 
import '../css/MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PointsProfile from '../components/PointsProfile'
import ProductCard from '../components/ProductCard'
import Shop from '../components/Shop'

import Logo from '../assets/Level-Up.png'

import UnrailedImage from '../assets/news/unrailed.jpg'

function MainPage(){

    const [logged, changeLogged] = useState(false);

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => {
        const existingProduct = prevCart.find((p) => p.title === product.title);

        if (existingProduct) {
        // si ya existe, aumenta su cantidad
        return prevCart.map((p) =>
        p.title === product.title
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      // si es nuevo, lo agrega con cantidad = 1
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [appliedCategory, setAppliedCategory] = useState("all");

    const [enteredMaxPrice, setEnteredMaxPrice] = useState("");
    const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

    const handleFilter = () => {
        setAppliedCategory(selectedCategory);
        setAppliedMaxPrice(enteredMaxPrice);
    };

    const filteredProducts = FakeDates.filter((p) => {
    const categoryMatch = appliedCategory === "all" || p.category === appliedCategory;
    const priceMatch = !appliedMaxPrice || p.price <= parseInt(appliedMaxPrice);
    return categoryMatch && priceMatch;
    });


    return(
        <>
            <Link to="/session">To session</Link>
            <Link to="login">To login</Link>
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
                isLogged = {logged}
                range = {'Esmerald'}
                points = {90}

            />

            <div className="menu">
                <div className="navBar">
                    <h1>Filtros catalogo</h1>
                    <div className="filter">
                        <label htmlFor="filtrerPrice">Precio maximo de filtro</label>
                        <input type="number" name="filtrerPrice" id="filtrerPrice" placeholder="CLP format ex $999999"  
                        value={enteredMaxPrice} onChange={(e) => setEnteredMaxPrice(e.target.value)}/>
                    </div>
                    <div className="filter">
                        <label htmlFor="selectType">Categoria a filtrar</label>
                        <select name="" id="" value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}>
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
                    <button onClick={handleFilter}>Filtrar</button>
                </div>
                <div className="products">
                    {filteredProducts.map((p, index) => (
                        <ProductCard
                        key={index}
                        title={p.title}
                        distributor={p.distributor}
                        distributorLink={p.distributorLink}
                        price={p.price}
                        description={p.description}
                        category={p.category}
                        rating={p.rating}
                        image={p.image}
                        eventPressed={() => addToCart(p)}
                        />
                    ))}
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

            <button className="btn btn-primary shop-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Tienda
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Tienda</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Shop 
                        logged={logged}
                        cart={cart}
                        setCart={setCart}
                    />

                </div>
            </div>

            <button onClick={() => changeLogged(!logged)}>Cambias de logueado a no logueado</button>

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