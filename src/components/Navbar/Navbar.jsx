import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-larger">
            <div className='logo'>
                <Link to='/'>
                    <h1>LPTB</h1>
                </Link>
            </div>
            
            <ul className='nav-links'>
                <li><Link className='links' to='/'>Home</Link></li>
                <li><Link className='links' to='/about'>About</Link></li>
                <li><Link className='links' to='/services'>Services</Link></li>
                <li><Link className='links' to='/webdev'>Web Dev</Link></li>
                <li><Link className='links' to='/contact'>Contact</Link></li>
            </ul>

            <div className='account'>
                <Link className='links' to='/login'>Log In</Link>
                <Link className='links' to='/signup'>Sign Up</Link>
            </div>
        </div>

        
        
        <div className="nav-links_small-screens">
        <div className='logo-small'>
                <Link to='/'>
                    <h1>LPTB</h1>
                </Link>
            </div>
            <GiHamburgerMenu className='hamburger-menu'/>

            <ul className='nav-links_small'>
                <li><Link className='links' to='/'>Home</Link></li>
                <li><Link className='links' to='/about'>About</Link></li>
                <li><Link className='links' to='/services'>Services</Link></li>
                <li><Link className='links' to='/webdev'>Web Dev</Link></li>
                <li><Link className='links' to='/contact'>Contact</Link></li>
            </ul>

            <div className='account-small'>
                <Link className='links' to='/login'>Log In</Link>
                <Link className='links' to='/signup'>Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
