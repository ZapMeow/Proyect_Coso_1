import React from 'react';
import '../css/MainPage.css';

function PointsProfile({ isLogged }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  if (isLogged) {
    return (
      
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>Usuario: <strong>{currentUser.username}</strong></h1>
        <p>Puntos Level-Up: {currentUser.points}</p>
        <p>Rango: {currentUser.range}</p>
        {currentUser.typeUser == 'duocuc' ? <p>Tipo de usuario: Estudiante Duoc UC (20% dcto.)</p> : <p>Tipo de usuario: Normal</p>}
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
