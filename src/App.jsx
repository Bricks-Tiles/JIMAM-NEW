import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Homepage } from './component/Homepage'
import Aboutus from './component/Aboutus';
import Services from './component/Services';
import Marketing from './component/Marketing';
import ContactPage from './component/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="m-0 p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
