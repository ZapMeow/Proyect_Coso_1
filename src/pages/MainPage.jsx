import { useState } from "react";
import { FakeDates } from "../components/FakeDates";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";

import PointsProfile from "../components/PointsProfile";
import ProductCard from "../components/ProductCard";
import Shop from "../components/Shop";

import Logo from "../assets/Level-Up.png";
import UnrailedImage from "../assets/news/unrailed.jpg";
import GtaImage from "../assets/news/gta6.jpg";
import EldenRing2 from '../assets/news/eldenRing2.jpg';
import Humo from '../assets/news/humo.jpg';
import Maincra from '../assets/news/maincra.jpg';
import Transparente from '../assets/news/transparente.jpg'

import FooterPage from "../components/FooterPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/MainPage.css"; // solo si quieres mantener pequeños detalles visuales

function MainPage() {
  const [logged, changeLogged] = useState(JSON.parse(localStorage.getItem("logged") || "false"));
const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser") || "null"));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [appliedCategory, setAppliedCategory] = useState("all");
  const [enteredMaxPrice, setEnteredMaxPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");
  const [cart, setCart] = useState([]);


  const updateCart = () => {
    const products = JSON.parse(localStorage.getItem("productos")) || [];
    setCart(products);
  };

  const handleFilter = () => {
    setAppliedCategory(selectedCategory);
    setAppliedMaxPrice(enteredMaxPrice);
  };

  const filteredProducts = FakeDates.filter((p) => {
    const categoryMatch = appliedCategory === "all" || p.category === appliedCategory;
    const priceMatch = !appliedMaxPrice || p.price <= parseInt(appliedMaxPrice);
    return categoryMatch && priceMatch;
  });

  const loguedadi = () => {
  const loggead = JSON.parse(localStorage.getItem("logged") || "false");
  const actualUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  console.log("Estado actual:", loggead);
  console.log("Usuario actual:", actualUser);

  // Mostrar información del usuario si está logueado
  if (actualUser) {
    console.log("Username:", actualUser.username);
    console.log("Email:", actualUser.email);
    console.log("Tipo:", actualUser.typeUser);
  }

  // Alternar el valor de logged
  const nuevoEstado = !loggead;
  localStorage.setItem("logged", JSON.stringify(nuevoEstado));
  changeLogged(nuevoEstado);
};


  

  return (
    <>
    <Link to="/products">Products aviable</Link>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="120" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center current-nav-bar" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#Inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Noticias">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Nosotros">Nosotros</a>
              </li>
            </ul>
          </div>

          {!logged ? 
          <>
          <div className="d-flex gap-2" id="Inicio">
            <Link to="/login" className="current-button">
              Iniciar sesión
            </Link>
            <Link to="/session" className="current-button">
              Registrarse
            </Link>
          </div>
          </> : 
          <>
            <div className="d-flex row gap-2 align-items-center justify-content-center">
                <p style={{textAlign:'center'}}>Hola, <strong>{currentUser.username}</strong></p>
            </div>
            
          </>
          }

          
        </div>
      </nav>


      <div className="container my-4">
        <PointsProfile isLogged={logged} user={currentUser} />
      </div>


      <div className="container-fluid my-5" id="Productos">
        <div className="row">
          {/* Sidebar filtros */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card text-white p-3 current-filter" >
              <h3 className="text-center mb-3">Filtros catálogo</h3>

              <div className="mb-3">
                <label className="form-label fw-bold">Precio máximo</label>
                <input
                  type="number"
                  className="form-control bg-black text-white border-light"
                  placeholder="CLP ej: $999999"
                  value={enteredMaxPrice}
                  onChange={(e) => setEnteredMaxPrice(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Categoría</label>
                <select
                  className="form-select bg-black text-white border-light"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
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
                  <option value="digitalgame">Juego digital</option>
                </select>
              </div>

              <button onClick={handleFilter} className="">
                Filtrar
              </button>
            </div>
          </div>


          <div className="col-12 col-md-9">
            <div className="row justify-content-center g-4">
              {filteredProducts.map((p) => (
                <div className="col-12 col-sm-6 col-lg-4" key={p.title}>
                  <ProductCard {...p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="card text-white p-4 current-event">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center">
              <h2>¿Dónde nos ubicamos?</h2>
              <p>Nos ubicamos en San Antonio justo en la casa de Marco Antonio Rojas</p>
            </div>
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!4v1761229515440!5m2!1ses!2scl!6m8!1m7!1sJORaz93_-_Pt4BtdeQqwtA!2m2!1d-33.56631788191421!2d-71.60737972261059!3f278.4574693361116!4f8.15246751860927!5f0.7820865974627469" 
              width="500" 
              height="250" 
              style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Noticias recientes</h2>
        <div className="d-flex overflow-auto gap-4">

          <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}} id="Noticias">
  <img src={GtaImage} className="card-img-top" alt="GTA VI" style={{height:'17rem'}}/>
  <div className="card-body">
    <h5 className="card-title">GTA VI confirma fecha de lanzamiento</h5>
    <p className="card-text">
      Rockstar Games anunció oficialmente que Grand Theft Auto VI saldrá el 17 de septiembre de 2025 para PlayStation 5 y Xbox Series X|S. 
      La versión para PC llegará unos meses después. El tráiler final se estrenará en verano de 2025.
    </p>
  </div>
</div>

<div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
  <img src={Transparente} className="card-img-top" alt="Nintendo Switch 2 transparente" style={{height:'17rem'}} />
  <div className="card-body">
    <h5 className="card-title">Nintendo anuncia una consola transparente</h5>
    <p className="card-text">
      Según filtraciones no confirmadas, Nintendo estaría trabajando en una versión transparente de la Switch 2, 
      con un diseño retro inspirado en el Game Boy Color. No se ha confirmado su autenticidad, por lo que podría tratarse de una broma viral.
    </p>
  </div>
</div>

<div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
  <img src={UnrailedImage} className="card-img-top" alt="Unrailed" style={{height:'17rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Unrailed recibe actualización con modo competitivo</h5>
    <p className="card-text">
      El juego cooperativo Unrailed lanzó una nueva actualización gratuita que añade un modo competitivo 2v2, 
      nuevas locomotoras y desafíos semanales. Los desarrolladores prometen más contenido antes de fin de año.
    </p>
  </div>
</div>

<div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
  <img src={Humo} className="card-img-top" alt="PS5 AR Headset" style={{height:'17rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Sony lanza casco de realidad aumentada para PS5</h5>
    <p className="card-text">
      Sony presentó un prototipo de casco de realidad aumentada compatible con la PlayStation 5, 
      que permitirá proyectar hologramas en el entorno del jugador. Sin embargo, la compañía aclaró que aún está en fase experimental.
    </p>
  </div>
</div>

<div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
  <img src={Maincra} className="card-img-top" alt="Minecraft VR" style={{height:'17rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Minecraft agrega soporte para realidad virtual móvil</h5>
    <p className="card-text">
      Mojang anunció una nueva actualización de Minecraft que permitirá jugar en modo realidad virtual desde teléfonos Android y iOS 
      usando visores básicos. El parche se lanzará a finales de noviembre de 2025.
    </p>
  </div>
</div>

<div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
  <img src={EldenRing2} className="card-img-top" alt="Elden Ring 2" style={{height:'17rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Elden Ring 2 filtrado por error en el sitio de Bandai Namco</h5>
    <p className="card-text">
      Una captura compartida en redes mostró una página temporal en el sitio de Bandai Namco titulada “Elden Ring: Age of Stars”. 
      Aunque la empresa retiró la publicación rápidamente, los fans especulan que se trata del anuncio del esperado sucesor.
    </p>
  </div>
</div>

        </div>
      </div>


      <div className="container my-5" id="Nosotros">
        <h2 className="text-center mb-4">Acerca de nosotros</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-white p-3 aboutUs">
              <h4>¿Quiénes somos?</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita vel quo libero esse dicta corporis iusto voluptatum voluptatem alias. Totam numquam illo quo? Quia omnis exercitationem alias qui reiciendis similique delectus doloremque! Nobis ab ipsa reprehenderit quaerat. Minima est facere, sed reiciendis vero, quam, explicabo ab voluptates velit architecto fuga.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white p-3 aboutUs">
              <h4>¿Dónde nos ubicamos?</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo autem neque aperiam consequuntur, eveniet earum ad maxime. Incidunt, adipisci est voluptatibus ut vero molestias molestiae! Ullam quisquam aut, animi consequatur eveniet magnam fuga fugiat nulla sapiente deserunt facilis rerum alias, consectetur mollitia hic! Autem animi corrupti incidunt ex optio.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white p-3 aboutUs">
              <h4>Nuestra misión</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vel accusantium perferendis recusandae incidunt aliquid voluptatem expedita ex itaque aut, est, ipsam praesentium natus! Excepturi, sint ipsa. Impedit corporis vel quis iusto neque pariatur vero voluptate distinctio dignissimos at. Sequi iste eveniet ut voluptatum atque ipsam, aliquam optio. Voluptatibus, doloribus.</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={updateCart}
        className="btn btn-success position-fixed bottom-0 end-0 m-4"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Tienda
      </button>

      <div
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Tienda</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <Shop logged={logged} cart={cart} updateCart={updateCart} />
        </div>
      </div>

      <div id="Contacto"></div>
      <FooterPage 
        links={true}
      />


      
    </>
  );
}

export default MainPage;
