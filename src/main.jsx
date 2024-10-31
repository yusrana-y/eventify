import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './bootstrap.min.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShareContext from './contexts/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShareContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShareContext>


  </StrictMode>,
)
