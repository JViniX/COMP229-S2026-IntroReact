import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Welcome from './App.jsx'
import Democomponent from './DemoComponent.jsx'
import DemoComponent2 from './DemoComponent2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Democomponent />
    <DemoComponent2 />
    <Welcome />
  </StrictMode>,
)
