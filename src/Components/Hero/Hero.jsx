import React from 'react'
import './Hero.css'

import hand_icon from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <h2>New Arrivals</h2>
        <div className="hero-left">
        <p>new</p>
        <img src={hand_icon} alt=''/>
        </div>
        
        <div className="hero-right">

        </div>
    </div>
  )
}

export default Hero