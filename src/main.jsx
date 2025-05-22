import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoCompras } from './CarritoCompras'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoCompras />
    </StrictMode>
  </BrowserRouter>
)
