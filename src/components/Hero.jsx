import React from 'react'

import foodimg from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <div className='hero__container'>
        <section className="hero full__bleed">
            <article className="introduction">
                <h1 className="introduction__title">Little Lemon</h1>
                <h2 className="introduction__subtitle">Chicago</h2>
                <p className="introduction__description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="/booking" className="btn__primary">Reserve a Table</a>
            </article>
        
        </section>
        <div className="hero__img">
            <img src={foodimg} alt="" />
        </div>
    </div>
  )
}


export default Hero;