import { fireEvent, render, screen } from "@testing-library/react"
import ProductCard from "../components/ProductCard"
import React from "react"

beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "[]")
    Storage.prototype.setItem = jest.fn()
})

//code, title, distributor, distributorLink, price, description, category, rating, image
describe('Product component', ()=>{
    const mockProduct = {
        code: "1",
        title: "Balatro plush",
        distributor: "jas",
        distributorLink: "lel",
        price: "20000",
        description: "Es el balatro peluche",
        category: "ola",
        rating: "7",
        image: "http://example.com/imagen1.png"
    }
    it('renderiza correctamente el producto', ()=>{
        render(<ProductCard {...mockProduct}/>)
        expect(screen.getByText("Balatro plush")).toBeInTheDocument()
        expect(screen.getByText("Es el balatro peluche")).toBeInTheDocument()
        expect(screen.getByText("$20000")).toBeInTheDocument()
    })

    it('llama a setItem al hacer click', ()=>{
        render(<ProductCard {...mockProduct}/>)
        const button = screen.getByText('Agregar')
        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'productos', JSON.stringify([mockProduct])
        )
    })
})