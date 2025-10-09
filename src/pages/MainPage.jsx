import CustomInput from "../components/CustomInput";
import CustomNavBar from "../components/CustomNavBar";
import CustomNavButton from '../components/CustomNavButton';

function MainPage(){
    return(
        <>
            <div className="header-navigation">
                <CustomNavBar links={[
                    { name: "Home", url: "#" },
                    { name: "Products", url: "#" },
                    { name: "About us", url: "#" },
                    { name: "Contact", url: "#" },
                    { name: "Help", url: "#" },
                    { name: "Blog", url: "#" }
                ]} />
                <CustomNavButton links={[
                    { name: "Login", type: "button" },
                    { name: "Sign Up", type: "button" },
                    { name: "Cart", type: "button" }
                ]} />
            </div>
        </>
    );
}
export default MainPage;