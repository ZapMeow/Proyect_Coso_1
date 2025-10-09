import CustomInput from "../components/CustomInput";

function MainPage(){
    return(
        <>
            <div>
                <nav>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </nav>
                <nav>
                    <button>Iniciar session</button>
                    <button>Registrarse</button>
                </nav>
            </div>
            <CustomInput />
            
        </>
    );
}
export default MainPage;