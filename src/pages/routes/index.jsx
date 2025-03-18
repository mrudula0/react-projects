import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homepage'

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/homepage"  element={<HomePage />}/>
    </Routes>
  )
}

export default PageRoutes