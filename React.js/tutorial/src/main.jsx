import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ComponentDidUpdate from './ComponentDidUpdate.jsx'
import FetchDataAPI from './FetchDataAPI.jsx'
import RenderList from './RenderList.jsx'
import ProductList from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ComponentDidUpdate />
    <FetchDataAPI />
    <RenderList />
    <ProductList />
  </StrictMode>,
)
