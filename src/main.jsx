import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ChatProvider from './context/ChatContext.jsx'
import VendorProvider from './context/VendorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <VendorProvider>
      <ChatProvider>
    <App />
    </ChatProvider>
    </VendorProvider>
  </BrowserRouter>
  </StrictMode>,
)
