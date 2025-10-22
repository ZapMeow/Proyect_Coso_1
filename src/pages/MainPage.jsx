import { useState } from "react";
import { FakeDates } from "../components/FakeDates";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PointsProfile from "../components/PointsProfile";
import ProductCard from "../components/ProductCard";
import Shop from "../components/Shop";

import Logo from "../assets/Level-Up.png";
import UnrailedImage from "../assets/news/unrailed.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/MainPage.css"; // solo si quieres mantener pequeños detalles visuales

function MainPage() {
  const [logged, changeLogged] = useState(true);
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

  return (
    <>
      {/* 🔹 Navbar */}
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
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-2">
            <Link to="/login" className="current-button">
              Iniciar sesión
            </Link>
            <Link to="/session" className="current-button">
              Registrarse
            </Link>
          </div>
        </div>
      </nav>


      <div className="container my-4">
        <PointsProfile isLogged={logged} range="Esmerald" points={90} />
      </div>


      <div className="container-fluid my-5">
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!..."
                className="w-100 rounded"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Noticias recientes</h2>
        <div className="d-flex overflow-auto gap-4">
          <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
            <img src={UnrailedImage} className="card-img-top" alt="Unrailed"  />
            <div className="card-body">
              <h5 className="card-title">Unrailed</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod in ducimus necessitatibus alias corporis reprehenderit non porro error itaque minima sapiente delectus tempore aut eius at temporibus minus quam rerum cupiditate ab repellendus, ipsum vel doloremque! Dolorem quia a itaque! Eos nostrum tenetur non. Consequuntur sequi, tempora reprehenderit fugit excepturi voluptatum dignissimos doloribus odio culpa aperiam. Ipsum, quisquam sint!</p>
            </div>
          </div>

        <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
            <img src={UnrailedImage} className="card-img-top" alt="Unrailed"  />
            <div className="card-body">
              <h5 className="card-title">Unrailed</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod in ducimus necessitatibus alias corporis reprehenderit non porro error itaque minima sapiente delectus tempore aut eius at temporibus minus quam rerum cupiditate ab repellendus, ipsum vel doloremque! Dolorem quia a itaque! Eos nostrum tenetur non. Consequuntur sequi, tempora reprehenderit fugit excepturi voluptatum dignissimos doloribus odio culpa aperiam. Ipsum, quisquam sint!</p>
            </div>
          </div>

        <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
            <img src={UnrailedImage} className="card-img-top" alt="Unrailed"  />
            <div className="card-body">
              <h5 className="card-title">Unrailed</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod in ducimus necessitatibus alias corporis reprehenderit non porro error itaque minima sapiente delectus tempore aut eius at temporibus minus quam rerum cupiditate ab repellendus, ipsum vel doloremque! Dolorem quia a itaque! Eos nostrum tenetur non. Consequuntur sequi, tempora reprehenderit fugit excepturi voluptatum dignissimos doloribus odio culpa aperiam. Ipsum, quisquam sint!</p>
            </div>
          </div>

        <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
            <img src={UnrailedImage} className="card-img-top" alt="Unrailed"  />
            <div className="card-body">
              <h5 className="card-title">Unrailed</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod in ducimus necessitatibus alias corporis reprehenderit non porro error itaque minima sapiente delectus tempore aut eius at temporibus minus quam rerum cupiditate ab repellendus, ipsum vel doloremque! Dolorem quia a itaque! Eos nostrum tenetur non. Consequuntur sequi, tempora reprehenderit fugit excepturi voluptatum dignissimos doloribus odio culpa aperiam. Ipsum, quisquam sint!</p>
            </div>
          </div>

        <div className="card text-white flex-shrink-0 align-items-center current-news" style={{width:'30rem'}}>
            <img src={UnrailedImage} className="card-img-top" alt="Unrailed"  />
            <div className="card-body">
              <h5 className="card-title">Unrailed</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod in ducimus necessitatibus alias corporis reprehenderit non porro error itaque minima sapiente delectus tempore aut eius at temporibus minus quam rerum cupiditate ab repellendus, ipsum vel doloremque! Dolorem quia a itaque! Eos nostrum tenetur non. Consequuntur sequi, tempora reprehenderit fugit excepturi voluptatum dignissimos doloribus odio culpa aperiam. Ipsum, quisquam sint!</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container my-5">
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


      <footer className="border-top border-secondary py-4 mt-5 bg-black text-white">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-6 mb-3">
              <h5>Redes sociales</h5>
              <a href="https://linkedin.com/" className="d-block text-white-50">
                <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
              </a>
              <a href="https://facebook.com/" className="d-block text-white-50">
                <i className="fa-brands fa-facebook me-2"></i>Facebook
              </a>
            </div>
            <div className="col-md-6">
              <h5>Contacto</h5>
              <a href="https://wa.me/123456789" className="d-block text-white-50">
                <i className="fa-brands fa-whatsapp me-2"></i>Whatsapp
              </a>
              <a href="mailto:correoejemplo@gmail.com" className="d-block text-white-50">
                <i className="fa-solid fa-envelope me-2"></i>Gmail
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
