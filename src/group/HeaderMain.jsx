import CustomNavBar from "../components/CustomNavBar";
import CustomNavButton from '../components/CustomNavButton';
import Logo from '../assets/Level-Up.png';
import { Link } from 'react-router-dom'


import '../css/headerMain.css';


function HeaderMain() {
    return (
        <> 
        <header className="header-main">
            <div className="sub-header-main">
                <img src={Logo} alt="Level Up Logo" />
                <CustomNavBar className="custom-nav-bar" arrayLinks={[
                    { name: "Home", url: "#" },
                    { name: "Products", url: "#" },
                    { name: "About us", url: "#" },
                    { name: "Contact", url: "#" },
                    { name: "Help", url: "#" },
                    { name: "Blog", url: "#" }
                ]} flex_direction="row" />
            </div>

            <CustomNavButton className="custom-nav-button" links={[
                { name: "Login", type: "button" },
                { name: "Sign Up", type: "button" }
            ]} />
        </header>
        </>
    );
}
export default HeaderMain;