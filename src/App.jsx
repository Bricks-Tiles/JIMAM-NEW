import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Contact } from './component/Contact'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1>Welcome to Our Site</h1>
        <p>This is some example text to show the main area.</p>
        <p>Scroll down to see the footer at the bottom.</p>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
