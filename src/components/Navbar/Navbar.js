import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
    <section className='navbar'>
      <Link to='/' className='navbar-item'>Home</Link>
      <Link to='/blog' className='navbar-item'>Blog</Link>
      <Link to='/about' className='navbar-item'>About</Link>
      <Link to='/faq' className='navbar-item'>FAQ</Link>
      <Link to='/contact' className='navbar-item'>Contact</Link>
    </section>
  )
}

export default Navbar
