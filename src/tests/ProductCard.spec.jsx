import React from 'react';
import { render, screen } from '@testing-library/react';
import PointsProfile from '../components/PointsProfile';

describe('PointsProfile', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("username", "name");
    localStorage.setItem("email", "hola@duocuc.cl");
    localStorage.setItem("typeUser", "duocuc");
    localStorage.setItem("points", "0");
    localStorage.setItem("range", "Hierro");
    localStorage.setItem("premium", "true"); // para que muestre el texto de Duoc UC
  });
  
  test('Muestra puntos y rango cuando se esta loggeado', () => {
    render(<PointsProfile isLogged={true} />);
    
    expect(screen.getByText('Usuario:')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('Puntos Level-Up: 0')).toBeInTheDocument();
    expect(screen.getByText('Rango: Hierro')).toBeInTheDocument();
    expect(screen.getByText('Tipo de usuario: Estudiante Duoc UC (20% dcto.)')).toBeInTheDocument();
  });

  test('Muestra mensaje de registro cuando no se esta loggeado', () => {
    render(<PointsProfile isLogged={false} />);
    
    expect(screen.getByText('Registrate o inicia sesión para ver tus puntos Level-Up')).toBeInTheDocument();
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });
});
