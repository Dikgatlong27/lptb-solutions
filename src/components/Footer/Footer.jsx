import React from 'react'
import { Link } from 'react-router-dom'

import { TiSocialFacebook, TiSocialLinkedin  } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaYoutube } from "react-icons/fa";





import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div>
                <h2>LPTB</h2>
            </div>

            <div>
                <li><Link className='links' to='/about'>About</Link></li>
                <li><Link className='links' to='/services'>Services</Link></li>
                <li><Link className='links' to='/contact'>Contact</Link></li>    
            </div>
            
            <div className="social">
                <div className="social-icons">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <TiSocialFacebook />
                        <TiSocialLinkedin />
                        <FaWhatsapp />
                        <FaGithub />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>

        <p style={{marginTop: '20px'}}>LPTB Solution (Pty) Ltd. &copy; 2024 All Rights Reserved</p>

    </div>
  )
}

export default Footer
