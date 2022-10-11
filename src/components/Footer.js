import React from 'react'
import '../styles/footer.css'
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className='footer-top-container'>
      <div className='footer-contact-left'>
        <h2>Keep in touch</h2>
        <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
        <input type="email" placeholder="Your email" />
      </div>
      <div className='footer-social-right'>
        <h2>Let's Socialize</h2>
        <p><FaFacebook/>   Facebook</p>
        <p><FaTwitterSquare/>    Twitter</p>
        <p><FaInstagram/>   Instagram</p>
      </div>
    </div>
    <div className='footer-bottom-container'>
      <div className='footer-bottom-right'>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy & Cookies Policies</p>
      </div>
      <div className='footer-bottom-left'>
        <p>2022 © UniLife</p>
      </div>
    </div>
    </>
  )
}

export default Footer