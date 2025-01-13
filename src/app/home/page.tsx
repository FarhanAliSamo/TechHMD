import React from 'react'
import Hero from './hero'
import AboutSection from './about-section'
import MultiColorSepartor from '@/components/atoms/multi-color-seprator'
import ServiceSection from './service-section'
import PrimaryBanner from './primary-banner'
import InnovativeSection from './innovative-section'
import SecondaryBanner from './secondary-banner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <MultiColorSepartor className='relative bottom-10' />
      <ServiceSection/>
      <PrimaryBanner/>
      <InnovativeSection/>
      <SecondaryBanner/>
      


    </div>
  )
}

export default Home