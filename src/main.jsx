import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import {ScrollToTop} from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true
  }}>
      <ScrollToTop/>
      <App />
    </Router>
  </StrictMode>,
)
