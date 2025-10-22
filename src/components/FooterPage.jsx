export default function FooterPage({links}){

    if (links){
        return(
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
        );
    }else{
        return(
            <footer className="copyright">
                <h1>Level Up</h1>
                <h2>Tienda de videojuegos</h2>
                <p>© Todos los derechos reservados (9999-9999)</p>
            </footer>
        );
    }

}