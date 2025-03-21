import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homepage'
import TodoList from '../../projects/todoList'
import DigitalClock from '../../projects/DigtalClock'
import StopWatch from '../../projects/StopWatch'
import Calculator from '../../projects/Calculator'
import SearchBox from '../../projects/searchBar'
const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/homepage"  element={<HomePage />}/>
        <Route path="/todo"  element={<TodoList />}/>
        <Route path="/digitalclock"  element={<DigitalClock />}/>
        <Route path="/stopwatch"  element={<StopWatch />}/>
        <Route path="/cal"  element={<Calculator />}/>
        <Route path="/searchbox"  element={<SearchBox />}/>

        
    </Routes>
  )
}

export default PageRoutes