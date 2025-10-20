import React from "react";

function Shop({logged}){

    if (logged){
        return(
            <>
                <h1>Tienda</h1>
            </>
        );
    }else{
        return(
            <>
                <h1>Debes loggearte para usar esta funcion</h1>
            </>
        );   
    }   
}
export default Shop;