import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"/>
                <p onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Shopper</Link></p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'white'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'white'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:'white'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
