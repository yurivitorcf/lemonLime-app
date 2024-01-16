import React, { Component } from 'react'
import bannerImg from '../images/restaurantfood.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <section>
          <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve Table</button>
          </div>

          <div className='banner-img'>
            <img src={bannerImg} alt=''/>
          </div>
        </section>
      </header>
    )
  }
}
