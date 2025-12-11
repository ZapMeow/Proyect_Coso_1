import { isAuthenticated } from "../services/AuthService";
import { Link } from "react-router-dom";
import HorseVideo from "../assets/veryVeryVeryImportantFiles/HorseVideo.mp4";

function UnknownPageNoRole(){

    localStorage.clear();
    return(
            <>
            <h1>No tienes los priviligeos suficientes para esta pagina</h1>
            <video src={HorseVideo} autoPlay loop></video>
            <Link to={"/login"}>Volver a iniciar sesion</Link>
            </>
        );
}
export default UnknownPageNoRole;