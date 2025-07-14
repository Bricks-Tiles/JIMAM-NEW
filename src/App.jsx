import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Contact } from './component/Contact'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
