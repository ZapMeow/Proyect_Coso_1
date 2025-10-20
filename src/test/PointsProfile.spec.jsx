import React from 'react';
import { render, screen } from '@testing-library/react';
import PointsProfile from '../components/PointsProfile';

describe('PointsProfile', () => {
  test('Muestra puntos y rango cuando se esta loggeado', () => {
    render(<PointsProfile isLogged={true} points={200} range="Oro" />);
    
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('Puntos Level-Up: 200')).toBeInTheDocument();
    expect(screen.getByText('Rango: Oro')).toBeInTheDocument();
  });

  test('Muestra mensaje de registro cuando no se esta loggeado', () => {
    render(<PointsProfile isLogged={false} />);
    
    expect(screen.getByText('Registrate o inicia sesión para ver tus puntos Level-Up')).toBeInTheDocument();
    expect(screen.getByText('Puntos Level-Up: ?')).toBeInTheDocument();
    expect(screen.getByText('Rango: ?')).toBeInTheDocument();
  });
});
