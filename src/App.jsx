import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Contact } from './component/Contact'
import { Homepage } from './component/Homepage'

const App = () => {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Homepage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
