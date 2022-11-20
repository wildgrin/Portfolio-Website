import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anshul-rai-755a3816b/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>    
        <a href="https://github.com/wildgrin" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/Anshul__rai"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials