import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Question from './pages/Question'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/question-one" element={<Question />} />
      </Routes>
    </div>
  )
}

export default App
