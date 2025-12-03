import React from 'react';
import '../css/MainPage.css';

function PointsProfile({ isLogged }) {
  const currentUser = localStorage.getItem("currentUser") || "null";
  const username = localStorage.getItem("username") || "null";
  const points = localStorage.getItem("points") || "0";
  const range = localStorage.getItem("range") || "null";
  const premium = localStorage.getItem("premium") || "false";



  if (isLogged) {
    return (
      
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>Usuario: <strong>{username}</strong></h1>
        <p>Puntos Level-Up: {points}</p>
        <p>Rango: {range}</p>
        {premium ? <p>Tipo de usuario: Estudiante Duoc UC (20% dcto.)</p> : <p>Tipo de usuario: Normal</p>}
      </div>
    );
  } else {
    return (
      <div className="levelPoints">
        <h1>Registrate o inicia sesión para ver tus puntos Level-Up</h1>
        <button>Registrarse</button>
      </div>
    );
  }
}

export default PointsProfile;
