import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Header} from './components/Header.jsx'
import { Body } from './components/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="body h-screen bg-gradient-to-r from-lightGray to-lightYellow " >
      <Header/>
      <Body/>
    </div>
  </StrictMode>,
)
