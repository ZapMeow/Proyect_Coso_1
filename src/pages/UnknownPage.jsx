import { isAuthenticated } from "../services/AuthService";
import { Link } from "react-router-dom";
import HorseVideo from "../assets/veryVeryVeryImportantFiles/HorseVideo.mp4";

function UnknownPage(){
    if(localStorage.getItem('logged') === true){
        localStorage.removeItem('logged');
        return(
            <>
            <h1>Tu rol no es el adecuado</h1>
            <video src={HorseVideo} autoPlay loop></video>
            <Link to={"/"}>Volver al inicio</Link>
            </>
        );
    }else{
        localStorage.removeItem('logged');
        return(
            <>
            <h1>Necesitas iniciar sesion para esta funcion</h1>
            <p>Capaz se te acabo el token tambien</p>
            <p>o no tienes el permiso quien sabe</p>
            <video src={HorseVideo} autoPlay loop></video>
            <Link to={"/"}>Volver al inicio</Link>
            </>
        );
    }
}
export default UnknownPage;