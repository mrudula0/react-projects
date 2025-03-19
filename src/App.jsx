import React from 'react'
import Navbar from './pages/navbar'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './pages/routes'
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <PageRoutes />
    </div>
    </BrowserRouter>
  )
}

export default App