import React from 'react'
import Hero from '../sections/Hero'
import SocialProofs from '../sections/SocialProofs'
import Features from '../sections/Features'
import Testimonials from '../sections/Testimonials'
import FeaturesGrid from '../sections/FeaturesGrid'
import Highlights from '../sections/Highlights'
import About from '../sections/About'
import ChangeLog from '../sections/ChangeLog'
import FinalCTA from '../sections/FinalCTA'

const Home = () => {
    return (
        <div>
            <Hero/>
            <SocialProofs/>
            <Features/>
            <Testimonials/>
            <FeaturesGrid/>
            <ChangeLog/>
            <About/>
            <Highlights/>
            <FinalCTA/>
        </div>
    )
}

export default Home