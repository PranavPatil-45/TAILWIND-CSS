import React from 'react'
import Navbar from '../Navbar.jsx'
import Carasoul from '../Carasoul.jsx'
import Layout from '../Layout.jsx'
import Heading from '../Heading.jsx'
import Footer from '../../Foorer.jsx'


export default function Home() {
  return (
    <div>
       <Navbar />
            <Carasoul />
             <Layout /> 
            <Heading />
            <Footer />
    </div>
  )
}
