import React from 'react'
import '../styles/header.css'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEmail} from "react-icons/md";

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            {/* <img className='logo' src='../assets/Vectorlogo-unilife.png' alt=""/> */}
            <p>Unilife</p>
        </div>
        <nav className='nav-container'>
            <FaRegHeart /> 
            <p>Shortlist</p>
            <MdOutlineEmail />
            <p>Contact Us</p>
            

        </nav>
    </div>
  )
}

export default Header