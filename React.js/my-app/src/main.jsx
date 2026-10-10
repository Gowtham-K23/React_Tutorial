import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Welcome.jsx'
import Props from './Props.jsx'
import PropsFunc from './PropsFunc.jsx'
import StateCounter from './StateCounter.jsx'
import Event from './Event.jsx'
import Event1 from './Event1.jsx'
import FormCon from './FormCon.jsx'
import FormUnCon from './FormUnCon.jsx'
import Onchange from './Onchange.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StateCounter />
    <Welcome />
    <Props name = "Raja" />
    <Props name = "Kumar" />
    <Props name = {25} />
    <PropsFunc />
    <Event />
    <Event1 />
    <FormCon />
    <FormUnCon />
    <Onchange />
  </StrictMode>,
)
