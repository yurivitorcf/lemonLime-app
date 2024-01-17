import React, { Component } from 'react'
import bannerImg from '../images/restaurantfood.jpg'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <section>
          <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/bookings"><button aria-label='On Click'>Reserve Table</button></Link>
          </div>
          <div className='banner-img'>
            <img src={bannerImg} alt=''/>
          </div>
        </section>
      </header>
    )
  }
}
