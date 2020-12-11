import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.scss'
import Navbar from '../Navbar/Navbar.js'

const Header = ({ user }) => (
  <section className='header'>
    <section className='header-top'>
      <section className='header-top__logo'>
        <a href='/' className='header-logo'>SOAR</a>
      </section>
      <section className='header-top__navbar'>
        <section className='header-top__navigation'>
          <Navbar />
        </section>
        <hr className='header-top__seperator' />
      </section>
    </section>
    <section className='header-bottom'>
      <section className='header-bottom__phone'>
        +1-307-250-1338
      </section>
      <section className='header-bottom__email'>
      kreitzmannco@gmail.com
      </section>
    </section>
  </section>
)

export default Header
