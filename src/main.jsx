import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//bootstrap
import './css/Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ProductCard.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

//for now i don't need this
//import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
