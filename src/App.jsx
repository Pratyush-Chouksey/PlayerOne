import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Pricing from './Pages/Pricing/Pricing'
import Games from './Pages/Games/Games'
import Contact from './Pages/Contact/Contact'
import Booking from './Pages/Booking/Booking'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div>
      <Navbar setActiveLink={setActiveLink} activeLink={activeLink}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App