import { useState } from "react";
import { FakeDates } from "../components/FakeDates";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import '../css/MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PointsProfile from '../components/PointsProfile';
import ProductCard from '../components/ProductCard';
import Shop from '../components/Shop';

import Logo from '../assets/Level-Up.png';
import UnrailedImage from '../assets/news/unrailed.jpg';

function MainPage() {
  const [logged, changeLogged] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [appliedCategory, setAppliedCategory] = useState("all");

  const [enteredMaxPrice, setEnteredMaxPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

  const [cart, setCart] = useState([]);

  const updateCart = () => {
    const products = JSON.parse(localStorage.getItem("productos")) || [];
    products.forEach((e) => {
      console.log(e.title);
    });
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
      <header>
  <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" style={{ height: "40px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#redes">Redes sociales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#noticias">Noticias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nosotros">Nosotros</a>
          </li>
        </ul>

        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-primary me-2">Iniciar sesión</Link>
          <Link to="/session" className="btn btn-outline-primary">Registrarse</Link>
        </div>
      </div>
    </div>
  </nav>
</header>

      <main className="container">
        <PointsProfile
          isLogged={logged}
          range={'Esmerald'}
          points={90}
        />

        <div className="row my-4">
          <aside className="col-12 col-md-3 mb-4 mb-md-0">
            <h4>Filtros catálogo</h4>
            <div className="mb-3">
              <label htmlFor="filtrerPrice" className="form-label">Precio máximo de filtro</label>
              <input
                type="number"
                className="form-control"
                id="filtrerPrice"
                placeholder="CLP format ex $999999"
                value={enteredMaxPrice}
                onChange={(e) => setEnteredMaxPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="selectType" className="form-label">Categoría a filtrar</label>
              <select
                className="form-select"
                id="selectType"
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
                <option value="digitalgame">Juegos digitales</option>
              </select>
            </div>
            <button onClick={handleFilter} className="btn btn-primary w-100">Filtrar</button>
          </aside>

          <section className="col-12 col-md-9">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {filteredProducts.map((p) => (
                <div key={p.title} className="col">
                  <ProductCard
                    title={p.title}
                    distributor={p.distributor}
                    distributorLink={p.distributorLink}
                    price={p.price}
                    description={p.description}
                    category={p.category}
                    rating={p.rating}
                    image={p.image}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="row mb-5" id="ubicacion">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2>¿Dónde nos ubicamos?</h2>
            <p>Nos ubicamos en San Antonio justo en la casa de Marco Antonio Rojas</p>
          </div>
          <div className="col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!4v1757474516485!5m2!1ses!2scl!6m8!1m7!1smchyYqMYbseAPbJ3bQnP0g!2m2!1d-33.56669449337895!2d-71.60751753229376!3f307.84117539758273!4f-12.671811096800354!5f0.7820865974627469"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            ></iframe>
          </div>
        </div>

        <h2 id="noticias" className="mb-3">Noticias recientes</h2>
        <div className='news row'>
          <div className='new col-12 col-md-6 col-lg-4'>
            <h3>Unrailed</h3>
            <img src={UnrailedImage} alt="Unrailed" className="img-fluid rounded mb-3" />
            <p>Unrailed es un juego.</p>
          </div>
        </div>

        <h2 id="nosotros" className="mb-3 mt-5">Acerca de nosotros</h2>
        <div className="row aboutUs">
          <div className="col-12 col-md-4 mb-4">
            <h3>¿Quiénes somos?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel harum, sint sapiente, minima aperiam quod enim beatae ea aut nam, atque eveniet nemo sed nihil ipsa delectus suscipit? Molestiae, commodi?</p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h3>¿Dónde nos ubicamos?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eveniet similique accusantium velit iste illo omnis aspernatur nulla harum architecto doloribus eaque deleniti earum veniam consequatur temporibus, laboriosam quos aut.</p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h3>Nuestra misión</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi cumque eum minus quas culpa eos hic ullam? Maiores illum eaque voluptatem dolorem eveniet, culpa ab officiis corrupti voluptate laborum?</p>
          </div>
        </div>

        <button
          onClick={updateCart}
          className="btn btn-primary shop-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Tienda
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Tienda</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Shop
              logged={logged}
              cart={cart}
              updateCart={updateCart}
            />
          </div>
        </div>

        <button
          onClick={() => changeLogged(!logged)}
          className="btn btn-secondary mt-3"
        >
          Cambiar estado de sesión
        </button>

      </main>

      <footer id="contacto" className="bg-light py-4 mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <div className="socialMedia mb-3 mb-md-0">
            <h5>Redes sociales</h5>
            <a href="https://linkedin.com/" className="d-block mb-1">
              <span className="fa-brands fa-linkedin me-2"></span>Linkedin
            </a>
            <a href="https://www.facebook.com/" className="d-block mb-1">
              <span className="fa-brands fa-facebook me-2"></span>Facebook
            </a>
            <a href="https://www.jetbrains.com/es-es/idea/download/?section=windows" className="d-block">
              <span className="fa-sharp fa-solid fa-code me-2"></span>IntellijIDEA
            </a>
          </div>
          <div className="tecnicSupport">
            <h5>Contacto</h5>
            <a href="https://wa.me/123456789" className="d-block mb-1">
              <span className="fa-brands fa-whatsapp me-2"></span>Whatsapp
            </a>
            <a href="mailto:correoejemplo@gmail.com" className="d-block">
              <span className="fa-solid fa-envelope me-2"></span>Gmail
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
