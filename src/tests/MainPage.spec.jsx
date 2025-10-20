import { render, screen } from "@testing-library/react"
import LoginPage from "../pages//LoginPage"
import React from "react"


describe('Main page', () => {
    it('Show catalog', () => {
        render(<LoginPage />)
        expect(screen.getByText("Login")).toBeInTheDocument()

        
    })
})

