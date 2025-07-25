import React from 'react'
import './Home.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import WhyPlayerOne from '../../Components/WhyPlayerOne/WhyPlayerOne'
import GameScroll from '../../Components/GameScroll/GameScroll'

const Home = () => {
  return (
    <div >
        <HeroSection />
        <GameScroll /> 
        <WhyPlayerOne />
    </div>
    
  )
}

export default Home