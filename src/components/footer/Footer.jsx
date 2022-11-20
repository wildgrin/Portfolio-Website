import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anshul</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/anshulwtf"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/anshul-rai-755a3816b/"><BsLinkedin/></a>    
        <a href="https://github.com/wildgrin"><FaGithub/></a>
        <a href="https://twitter.com/Anshul__rai"><FiTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Anshul Rai. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer