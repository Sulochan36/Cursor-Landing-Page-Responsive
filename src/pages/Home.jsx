import React from 'react'
import Hero from '../sections/Hero'
import SocialProofs from '../sections/SocialProofs'
import Features from '../sections/Features'
import Testimonials from '../sections/Testimonials'
import FeaturesGrid from '../sections/FeaturesGrid'
import Highlights from '../sections/Highlights'
import About from '../sections/About'
import ChangeLog from '../sections/ChangeLog'
import Cta from '../sections/Cta'

const Home = () => {
    return (
        <div>
            <Hero/>
            <SocialProofs/>
            <Features/>
            <Testimonials/>
            <FeaturesGrid/>
            <Highlights/>
            <About/>
            <ChangeLog/>
            <Cta/>
        </div>
    )
}

export default Home