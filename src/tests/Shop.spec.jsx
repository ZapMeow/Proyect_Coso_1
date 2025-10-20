import { fireEvent, render, screen } from "@testing-library/react"
import Shop from '../components/Shop'
import React from "react"

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => "[]")
  Storage.prototype.setItem = jest.fn()
})

describe('Shop funcional', () => {
  const logged = true

  const mockProduct = [{
    code: "1",
    title: "Balatro plush",
    distributor: "jas",
    distributorLink: "lel",
    price: "20000",
    description: "Es el balatro peluche",
    category: "ola",
    rating: "7",
    image: "http://example.com/imagen1.png"
  }]

  const updateCart = jest.fn()

  it('renderiza el carrito normal', () => {
    render(<Shop logged={logged} cart={mockProduct} updateCart={updateCart} />)
    expect(screen.getByText("Balatro plush")).toBeInTheDocument()
    expect(screen.getByText("Total del carrito: $20000")).toBeInTheDocument()
  })

  it('buttons', () => {
    render(<Shop logged={logged} cart={mockProduct} updateCart={updateCart} />)
    const button = screen.getByText('+')
    fireEvent.click(button)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'productos',
      expect.any(String)
    )
  })
})

describe('Shop no funcional', () => {
  const logged = false

  const updateCart = jest.fn()

  const mockProduct = [{
    code: "1",
    title: "Balatro plush",
    distributor: "jas",
    distributorLink: "lel",
    price: "20000",
    description: "Es el balatro peluche",
    category: "ola",
    rating: "7",
    image: "http://example.com/imagen1.png"
  }]

  it('Tienda no funcional', () =>{
    render(<Shop logged={logged} cart={mockProduct} updateCart={updateCart} />)
    expect(screen.getByText("Debes loggearte para usar esta función")).toBeInTheDocument()
  })

})
