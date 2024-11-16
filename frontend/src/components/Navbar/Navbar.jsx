import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo'></img>
      <ul className="navbar-">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
       <div className="navbar">
        <img src={assets.search_icon} alt="" />
       </div>
    </div>
  )
}

export default Navbar