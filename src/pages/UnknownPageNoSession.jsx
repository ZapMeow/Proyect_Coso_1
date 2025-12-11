import { isAuthenticated } from "../services/AuthService";
import { Link } from "react-router-dom";
import HorseVideo from "../assets/veryVeryVeryImportantFiles/HorseVideo.mp4";

function UnknownPageNoSession(){

    localStorage.clear();
    return(
            <>
            <h1>Debes iniciar sesion para acceder a esta pagina</h1>
            <p>O token ya fue expirado</p>
            <video src={HorseVideo} autoPlay loop></video>
            <Link to={"/login"}>Volver a iniciar sesion</Link>
            </>
        );
}
export default UnknownPageNoSession;