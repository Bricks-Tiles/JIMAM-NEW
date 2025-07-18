import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Contact } from './component/Contact'
import { Homepage } from './component/Homepage'
import {Aboutus } from './component/Aboutus'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Homepage />
      <Contact />
      <Footer />
      <Aboutus />
    </div>
  )
}

export default App

