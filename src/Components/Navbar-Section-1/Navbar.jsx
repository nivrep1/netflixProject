import React from 'react'
import LanguageChange from '../FirstPage/LanguageChange'
import Logo from './Logo'
import "./Navbar.scss"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   
        <div className='section-navbar'>
        <div className='left-navbar'>
        <Logo/>
        </div>
           
        <div className='right-navbar'>
        <LanguageChange/>
        <button className='button'>
        <Link to="/login">
        Sign In
        </Link>
       
        </button>
       
        </div>
        </div>

  )
}

export default Navbar