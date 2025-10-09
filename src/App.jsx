import { useState } from 'react'
import './css/App.css'

import CustomizableCards from './miniComponents/CustomizableCards.jsx'
import CustomizableInputs from './miniComponents/CustomizableInputs.jsx'
import HeaderMain from './components/HeaderMain.jsx'
import PointsContainer from './components/PointsConteiner.jsx'
import FilterComponents from './components/FilterComponents.jsx'
import EventComponent from './components/EventComponent.jsx'
import AboutUsComponent from './components/AboutUsComponent.jsx'
import ContactComponent from './components/ContactComponent.jsx'


function App() {
  //https://i.redd.it/g9ommn8hbvob1.png
  //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2103a907-aeda-42b2-b333-a426721b8c5b/dg4oczi-6780fd65-c2c5-4c86-bb21-c2e07199b5e2.png/v1/fit/w_414,h_414/jolteon_boykisser_by_rakuzaii_dg4oczi-414w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzIxMDNhOTA3LWFlZGEtNDJiMi1iMzMzLWE0MjY3MjFiOGM1YlwvZGc0b2N6aS02NzgwZmQ2NS1jMmM1LTRjODYtYmIyMS1jMmUwNzE5OWI1ZTIucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xzyq_zqcr-xTSAX93ZEjjqN2s_uh-sbe3nmgx541Nec"

  return (
    <>
    <CustomizableInputs/>
    <CustomizableCards 
      image="https://i.redd.it/g9ommn8hbvob1.png"
      title="Producto de prueba"
      distributor="Distribuidor de prueba"
      linkDistributor="#"
      body="Este es un producto de prueba."
      category="prueba"
    />
    <EventComponent />
    <AboutUsComponent />
    <ContactComponent />
    </>
  )
}

export default App



//--- 
