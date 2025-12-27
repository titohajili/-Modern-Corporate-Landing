import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WorkProcess from './WorkProcess/WorkProcess'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <WorkProcess/>
    </div>
  )
}

export default Home
