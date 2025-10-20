import { render, screen } from '@testing-library/react'
import ProductCard from '../components/ProductCard'
import React from 'react'

describe('ProductCard', () => {
  const mockProps = {
    code: "1",
    title: 'Producto de prueba',
    distributor: 'Distribuidor Ejemplo',
    distributorLink: 'https://distribuidor.com',
    price: 123.45,
    description: 'Esta es una descripción de prueba.',
    category: 'categoria1',
    rating: 8,
    image: 'https://via.placeholder.com/150'
  }

  it('Renderiza correctamente las propiedades', () => {
    render(<ProductCard {...mockProps} />)

    expect(screen.getByText(mockProps.title)).toBeInTheDocument()

    const distributorLink = screen.getByRole('link', { name: mockProps.distributor })
    expect(distributorLink).toHaveAttribute('href', mockProps.distributorLink)

    expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProps.rating}/10 ⭐`)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()

    const image = screen.getByAltText(mockProps.title)
    expect(image).toHaveAttribute('src', mockProps.image)

    expect(screen.getByText('Agregar')).toBeInTheDocument()
    expect(screen.getByText('Calificar')).toBeInTheDocument()

    expect(screen.getByRole('img').parentElement).toHaveClass(`card ${mockProps.category} current-card`)
  })
})
