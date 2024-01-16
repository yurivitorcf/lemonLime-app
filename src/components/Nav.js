import React, { Component } from 'react'
import logo from '../images/Logo.svg'

export default class Nav extends Component {
  render() {

    return (
      <nav className='navbar'>
        <a href='/'>
          <img src={logo} alt='logo'/>
        </a>

        <ul className=''>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>Order Online</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
      </nav>
    )
  }
}
