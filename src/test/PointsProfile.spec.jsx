import React from 'react';
import { render, screen } from '@testing-library/react';
import PointsProfile from '../components/PointsProfile';

describe('PointsProfile', () => {
  const mockBody = {username: 'name', password: '1234', email: 'hola@duocuc.cl', typeUser: 'duocuc', points: 0, range: 'Hierro'};
  
  beforeEach(() => {
    localStorage.setItem("currentUser", JSON.stringify(mockBody));
  })
  
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
