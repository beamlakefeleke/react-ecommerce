import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers in Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter-form">
            <input type="email" name="email" id="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
        <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
    </div>
  )
}

export default NewsLetter;
