import React from 'react'
import logo from '../Assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" className="src" />
            <p>Shopper</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>
        <div className="footer-copyright">
            <p>Copyrigth @ 2024 - Already reserved by bamlake</p>
        </div>
    </div>
  )
}

export default Footer