import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <>
      <div className='footer-top-container'>
      <div className='footer-contact-right'>
        <h2>Keep in touch</h2>
        <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
        <input type="email" placeholder="Your email" />
      </div>
      <div className='footer-social-left'>
        <h2>Let's Socialize</h2>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
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