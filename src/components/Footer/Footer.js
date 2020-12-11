import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = ({ user }) => (
  <section className='footer'>
    <hr className='footer-seperator'/>
    <section className='footer-social-media'>
      <section className='footer-info-left'>
        <section className='footer-info__linkedin'>
          <a href='https://www.facebook.com/SOAR-Counseling-Service-104003708022475/'>Facebook</a>
        </section>
        <section className='footer-info__github'>
          <a href='/'>Twitter</a>
        </section>
        <section>
          kreitzmannco@gmail.com
        </section>
        <section>
          +1-307-250-1338
        </section>
        <section>
          702 Platinum Dr.
        </section>
        <section>
          Cody WY  82414
        </section>

      </section>
      <section className='footer-info-center'>

      </section>
      <section className='footer-info-right'>
        <section>
          <Link className='navbar-item' to="/">Home</Link>
        </section>
        <section>
          <Link to='/blog' className='navbar-item'>Blog</Link>
        </section>
        <section>
          <Link to='/about' className='navbar-item'>About</Link>
        </section>
        <section>
          <Link to='/faq' className='navbar-item'>FAQ</Link>
        </section>
        <section>
          <Link to='/contact' className='navbar-item'>Contact</Link>
        </section>
        <section>
          <Link className='navbar-item' to="/sign-in">Admin</Link>
        </section>
      </section>
    </section>
    <hr className='footer-seperator'/>
  </section>
)

export default Footer
