import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import React from 'react'

describe('ProductCard', () => {
  const mockProduct = {
    idProduct: "1",
    nameProduct: 'Producto de prueba',
    distributorProduct: 'Distribuidor Ejemplo',
    linkDistributor: 'https://distribuidor.com',
    priceProduct: 123.45,
    categoryProduct: 'categoria1',
    urlImage: 'https://via.placeholder.com/150'
  }

  it('Renderiza correctamente las propiedades', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )

    expect(screen.getByText(mockProduct.nameProduct)).toBeInTheDocument()

    const distributorLink = screen.getByRole('link', { name: mockProduct.distributorProduct })
    expect(distributorLink).toHaveAttribute('href', mockProduct.linkDistributor)

    expect(screen.getByText(`$${mockProduct.priceProduct}`)).toBeInTheDocument()
    expect(screen.getByText('0/10 ⭐')).toBeInTheDocument()

    const image = screen.getByAltText(mockProduct.nameProduct)
    expect(image).toHaveAttribute('src', mockProduct.urlImage)

    expect(screen.getByText('Agregar')).toBeInTheDocument()

    expect(screen.getByRole('img').parentElement).toHaveClass(`card text-white p-2 m-2 ${mockProduct.categoryProduct} current-card transition`)
  })
})
