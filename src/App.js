import './App.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import logo from './resource/ziggo-logo.svg'
import { useNavigate } from "react-router-dom";


import Question from './pages/Question'
import LandingPage from './pages/LandingPage'

const App = () => {
  const navigate = useNavigate()

  return (
    // <div className="App">
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route exact path="/question-one" element={<Question />} />
    //   </Routes>
    // </div>
    <div className="container">
      <section className="one">
        <img src={logo} className="survey-logo" alt="logo" />
      </section>
      <section className="two">
        <button className="btn btn-primary" onClick={() => navigate("/question-one") }>
          <span className="btn-title">Begin</span>
        </button>
      </section>
    </div>
  )
}

export default App
