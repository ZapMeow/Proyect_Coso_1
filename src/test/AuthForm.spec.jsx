import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

// Mock de AuthService
jest.mock('../services/AuthService', () => ({
  login: jest.fn(),
  register: jest.fn(),
}));

import { login, register } from '../services/AuthService';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('AuthForm', () => {

  test('renderiza correctamente en modo login', () => {
    render(
      <MemoryRouter>
        <AuthForm mode="login" />
      </MemoryRouter>
    );

    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Fecha de nacimiento')).not.toBeInTheDocument();
  });

  test('renderiza correctamente en modo register', () => {
    render(
      <MemoryRouter>
        <AuthForm mode="register" />
      </MemoryRouter>
    );

    expect(screen.getByText('Registrarse')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Fecha de nacimiento')).toBeInTheDocument();
  });

  test('muestra error si el usuario es menor de 18 años', () => {
    render(
      <MemoryRouter>
        <AuthForm mode="register" />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), {
      target: { value: 'user123' },
    });

    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: '123456' },
    });

    fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), {
      target: { value: '123456' },
    });

    const today = new Date();
    const lessThan18 = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate())
      .toISOString().split('T')[0];

    fireEvent.change(screen.getByPlaceholderText('Fecha de nacimiento'), {
      target: { value: lessThan18 },
    });

    fireEvent.click(screen.getByText('Crear cuenta'));

    expect(screen.getByText('Debes tener al menos 18 años para registrarte.')).toBeInTheDocument();
  });

  test('login falla si backend rechaza credenciales', async () => {
    login.mockRejectedValue({
      response: { data: { error: 'Credenciales incorrectas.' } }
    });

    render(
      <MemoryRouter>
        <AuthForm mode="login" />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), {
      target: { value: 'wrongUser' },
    });

    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: 'wrongPass' },
    });

    fireEvent.click(screen.getByText('Entrar'));

    expect(await screen.findByText('Credenciales incorrectas.')).toBeInTheDocument();
  });

});
