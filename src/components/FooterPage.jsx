import React from "react";

export default function FooterPage({links}){

    if (links){
        return(
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
        );
    }else{
        return(
            <footer className="bg-black text-white" style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <h1>Level Up</h1>
                <h2>Tienda de videojuegos</h2>
                <p>© Todos los derechos reservados ()</p>
            </footer>
        );
    }

}