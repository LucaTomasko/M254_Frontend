import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import TournamentsPage from './components/pages/TournamentsPage'

const Router = () => {
  return (
    <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path='/tournaments' element={<TournamentsPage/>}/>
    </Routes>
  )
}

export default Router