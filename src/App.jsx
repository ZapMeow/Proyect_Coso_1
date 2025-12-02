import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/ProductCard.css'
import LoginPage from './pages/LoginPage'
import SessionPage from './pages/SessionPage'
import MainPage from './pages/MainPage'
import ProductView from './pages/ProductView'
import ProductColumn from './components/ProductColumn'
import ProductForm from './components/ProductForm'
import ProductPage from './pages/ProductPage'



function App() {
  //https://i.redd.it/g9ommn8hbvob1.png
  //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2103a907-aeda-42b2-b333-a426721b8c5b/dg4oczi-6780fd65-c2c5-4c86-bb21-c2e07199b5e2.png/v1/fit/w_414,h_414/jolteon_boykisser_by_rakuzaii_dg4oczi-414w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzIxMDNhOTA3LWFlZGEtNDJiMi1iMzMzLWE0MjY3MjFiOGM1YlwvZGc0b2N6aS02NzgwZmQ2NS1jMmM1LTRjODYtYmIyMS1jMmUwNzE5OWI1ZTIucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xzyq_zqcr-xTSAX93ZEjjqN2s_uh-sbe3nmgx541Nec"

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/session" element={<SessionPage />} />
        <Route path="/product" element={<ProductView />}/>
        <Route path='/products' element={<ProductColumn />} />
        <Route path='/add' element={<ProductForm />} />
        <Route path='/edit/:idProduct' element={<ProductForm />} />
        <Route path="/product/:idProduct" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App