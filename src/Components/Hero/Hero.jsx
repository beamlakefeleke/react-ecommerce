import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hand_icon from '../Assets/hand.png'
import hero_img from '../Assets/earth.png'

const Hero = () => {
  return (
    <div className='hero'>
        
        <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hand-hand_icon">
          <p>new</p>
          <img src={hand_icon} alt=''/>
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>
            Latest Collection
          </div>
          <img src={arrow_icon} alt=""/>
        </div>
        </div>
       
        <div className="hero-right">
          <img src={hero_img} alt=""/>
        </div>
    </div>
  )
}

export default Hero