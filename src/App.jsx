import { useState } from 'react'
import './css/App.css'
import ProductCard from './components/ProductCard.jsx'
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
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      <br />
      <br />
      <Routes>
        <Route path='/' Component= 
      </Routes>
    </BrowserRouter>
    <HeaderMain />
    <PointsContainer />
    <FilterComponents />
    <ProductCard image="https://i.redd.it/g9ommn8hbvob1.png" 
                  title="Vaporeon kisser" 
                  distributor="fishing factory"
                  linkDistributor="https://youtu.be/jLMKL3RBSt8?si=tkKQ-pMpAXfz0fEa"
                  body="that vaporeon can give you a wet kiss."
                  category="water" 
                  />
      <ProductCard image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2103a907-aeda-42b2-b333-a426721b8c5b/dg4oczi-6780fd65-c2c5-4c86-bb21-c2e07199b5e2.png/v1/fit/w_414,h_414/jolteon_boykisser_by_rakuzaii_dg4oczi-414w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzIxMDNhOTA3LWFlZGEtNDJiMi1iMzMzLWE0MjY3MjFiOGM1YlwvZGc0b2N6aS02NzgwZmQ2NS1jMmM1LTRjODYtYmIyMS1jMmUwNzE5OWI1ZTIucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xzyq_zqcr-xTSAX93ZEjjqN2s_uh-sbe3nmgx541Nec"
                    title="Jolteon kisser"
                    distributor="Your mom"
                    linkDistributor="https://youtu.be/Q5-bhcPRlg8?si=N_FabonYmYMTSdB5"
                    body="that jolteon can give you a shock."
                    category="electric"
                  />
      <ProductCard image="https://i.pinimg.com/originals/1c/7a/3f/1c7a3f0e2f0d1b6e2f3c4b3f5e6a7b8c.png"
                    title="Flareon kisser"
                    distributor="Your dad"
                    linkDistributor="https://youtu.be/8k0vYp7n8kA?si=Z4JHjX1bX4uYc1iM"
                    body="that flareon can give you a hot kiss."
                    category="fire"
                  />
    <EventComponent />
    <AboutUsComponent />
    <ContactComponent />
    </>
  )
}

export default App



//--- 
