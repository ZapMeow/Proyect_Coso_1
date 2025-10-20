export default function FooterPage({links}){

    if (links){
        return(
            <Footer></Footer>
        );
    }else{
        return(
            <Footer>
                <h1>Level Up</h1>
                <h2>Tienda de videojuegos</h2>
                <p>© Todos los derechos reservados ()</p>
            </Footer>
        );
    }

}