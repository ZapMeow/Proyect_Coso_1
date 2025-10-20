import React from 'react';
import '../css/MainPage.css';

function PointsProfile({ isLogged, range, points }) {
  if (isLogged) {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Puntos Level-Up: {points}</p>
        <p>Rango: {range}</p>
      </div>
    );
  } else {
    return (
      <div className="levelPoints">
        <h1>Registrate o inicia sesión para ver tus puntos Level-Up</h1>
        <h1>Puntos Level-Up: ?</h1>
        <h2>Rango: ?</h2>
        <div className="bar">
          <div className="progressBar"><p>?</p></div>
        </div>
        <p>Necesita crear una cuenta para ver sus datos</p>
        <button>Registrarse</button>
      </div>
    );
  }
}

export default PointsProfile;
