import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import HeroContent from './HeroContent'
import HomeSection from './HomeSection'
const Home = () => {
    return (
       <div className="homeContainer">
            <Navbar/>
            <HeroContent/>
            <HomeSection/>
       </div>
    )
}

export default Home
