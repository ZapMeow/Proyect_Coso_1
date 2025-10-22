import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../components/AuthForm';

beforeEach(() => {
  localStorage.clear();
});

describe('AuthForm', () => {
  test('renderiza correctamente en modo login', () => {
    render(<AuthForm mode="login" />);
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Fecha de nacimiento')).not.toBeInTheDocument();
  });

  test('renderiza correctamente en modo register', () => {
    render(<AuthForm mode="register" />);
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Fecha de nacimiento')).toBeInTheDocument();
  });

  test('muestra error si el usuario es menor de 18 años', () => {
    render(<AuthForm mode="register" />);
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'userName' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'newpass' } });

    const today = new Date();
    const lessThan18 = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    fireEvent.change(screen.getByPlaceholderText('Fecha de nacimiento'), { target: { value: lessThan18 } });
    fireEvent.click(screen.getByText('Crear cuenta'));
    expect(screen.getByText('Debes tener al menos 18 años para registrarte.')).toBeInTheDocument();
  });

  test('muestra error si el usuario ya existe', () => {
    const today = new Date();
    const over18 = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    localStorage.setItem('users', JSON.stringify({
      'existuser@example.com': { password: 'abc123', birthDate: over18, tipo: 'normal' }
    }));

    render(<AuthForm mode="register" />);
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'userName' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'existuser@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'newpass' } });
    fireEvent.change(screen.getByPlaceholderText('Confirmar contraseña'), { target: { value: 'newpass' } });
    fireEvent.change(screen.getByPlaceholderText('Fecha de nacimiento'), { target: { value: over18 } });
    fireEvent.click(screen.getByText('Crear cuenta'));

    expect(screen.getByText('El correo ya esta registrado.')).toBeInTheDocument();
  });

  test('muestra error con credenciales incorrectas en login', () => {
    const today = new Date();
    const over18 = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()).toISOString().split('T')[0];
    localStorage.setItem('users', JSON.stringify({
      'user@example.com': { password: 'correctpass', birthDate: over18, tipo: 'normal' }
    }));

    render(<AuthForm mode="login" />);
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'incorrectUser' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText('Entrar'));

    expect(screen.getByText('Credenciales incorrectas.')).toBeInTheDocument();
  });
});
