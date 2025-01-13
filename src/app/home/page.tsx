import React from 'react'
import Hero from './hero'
import AboutSection from './about-section'
import MultiColorSepartor from '@/components/atoms/multi-color-seprator'
import ServiceSection from './service-section'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <MultiColorSepartor/>
      <ServiceSection/>


    </div>
  )
}

export default Home