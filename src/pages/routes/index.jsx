import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homepage'
import TodoList from '../../projects/todoList'

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/homepage"  element={<HomePage />}/>
        <Route path="/todo"  element={<TodoList />}/>

        
    </Routes>
  )
}

export default PageRoutes