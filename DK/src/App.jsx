import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Main.jsx/Home'
import Products from './Components/Products/ProductMain/Products.jsx'
import Aboutmain from './Components/About Us/Aboutmain.jsx'
import Contact  from './Components/Conatct/Conatct.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Aboutmain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App