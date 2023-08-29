import React from 'react'
import Hero from '../Components/Hero';
import CallUps from '../Components/CallUps';
import About from '../Components/About';
import Footer from '../Components/Footer';
// import ModalComponent from '../Components/ModalComponent';
import NesiaChatBot from '../Components/NesiaChatBot';




const Home = () => {
  return (
    <div>
      <Hero />
      <CallUps />
      <About />
      <Footer />
      {/* <ModalComponent /> */}
      <NesiaChatBot />
    </div>
  )
}

export default Home
