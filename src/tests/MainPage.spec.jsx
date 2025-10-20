import { render, screen } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'
import LoginPage from "../pages//LoginPage"
import React from "react"


describe('Main page', () => {
    it('Show catalog', () => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
    )
        expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument()

        
    })
})

