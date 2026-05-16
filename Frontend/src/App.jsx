import React from 'react'
import Navbar from './assets/layout/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Service from './assets/components/Service'
import Production from './assets/components/Production'
import Gallery from './assets/components/Gallery'
import Signin from './assets/layout/Signin'

import Contact from './assets/components/Contact'
import Footer from './assets/layout/Footer'

import "./index.css";
import "./App.css";



const App = () => {
  return (

<div className='min-h-screen overflow-x-hidden'>


      <Navbar />
<main>
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Production />
      <Contact />
      <Signin />
</main>
      <Footer />
</div>


  )
}

export default App
