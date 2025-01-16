'use client'

import React from 'react'
import Hero from './hero'
import AboutSection from './about-section'
import MultiColorSepartor from '@/components/atoms/multi-color-seprator'
import ServiceSection from './service-section'
import PrimaryBanner from './primary-banner'
import InnovativeSection from './innovative-section'
import SecondaryBanner from './secondary-banner'
import PortfolioSection from './portfolio-section'
import Testimonialsection from './testimonial-section'

const Home = () => {

  
  const test = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(test)
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <MultiColorSepartor  />
      <ServiceSection/>
      <PortfolioSection/>
      <PrimaryBanner/>
      <InnovativeSection/>
      <Testimonialsection/>
      <SecondaryBanner/>

    </div>
  )
}

export default Home