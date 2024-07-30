import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/hand.png'

const Offers = () => {
  return (
    <div className="Offers">
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>offers for you </h1>
            <p>qwertyui sdfgh zxcv</p>
            <button>Check now</button>
        </div>
        <div className="offers_right">
            <img src ={exclusive_image} alt =""/>  
            </div> 

    </div>
  )
}

export default Offers