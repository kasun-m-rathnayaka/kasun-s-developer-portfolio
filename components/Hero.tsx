import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <section className='h-[100vh]'>
          <Spotlight className='-top-35 -left-39 md:-top-40 md:-left-50'/>
          <Spotlight className='-top-35 -right-39 md:-top-40 md:-right-50'/>
        Hero
    </section>
  )
}

export default Hero