import React from 'react'

import footer_logo from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img src={footer_logo} alt="Little lemon logo" />
        <div className="footer__copyright">
          <p>© 2020 Little Lemon</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer;