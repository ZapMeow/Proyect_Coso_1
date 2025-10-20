import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';

describe('Shop', () => {
  test('Muestra "Tienda" cuando logged es true', () => {
    render(<Shop logged={true} />);
    expect(screen.getByText('Tienda')).toBeInTheDocument();
  });

  test('Muestra peticion de loggearte cuando logged es false', () => {
    render(<Shop logged={false} />);
    expect(screen.getByText('Debes loggearte para usar esta funcion')).toBeInTheDocument();
  });
});