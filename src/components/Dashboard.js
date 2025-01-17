import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About  from './About'
import Form1 from './Form1'
import Home from './Home'
import Success from './Success'

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Success />} />


        <Route path='/about' element={ <About />} />
        <Route path="/application" element={<Form1 />} />

      </Routes>

    </div>
  )
}

export default Dashboard