import { isAuthenticated } from "../services/AuthService";
import { Link } from "react-router-dom";
import HorseVideo from "../assets/veryVeryVeryImportantFiles/HorseVideo.mp4";

function UnknownPage(){
    localStorage.clear();
    return(
            <>
            <h1>Necesitas iniciar sesion para esta funcion</h1>
            <p>Capaz se te acabo el token tambien</p>
            <p>o no tienes el permiso quien sabe</p>
            <p>Se te ha removido la sesion</p>
            <video src={HorseVideo} autoPlay loop></video>
            <Link to={"/"}>Volver al inicio</Link>
            </>
        );
}
export default UnknownPage;