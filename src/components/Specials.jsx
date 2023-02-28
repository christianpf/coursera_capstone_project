import React from 'react'

import specials from '../data/specials.json'
import {MdOutlineDirectionsBike} from 'react-icons/md'

import greekSalad from '../assets/greek-salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon-dessert.jpg'

const ProductPreview = ({product, image}) => {


  return (
    <div className="product__preview">
      <img src={image} alt={product.name} />
      <div className="product__preview__info">
        <div className="product__preview__info__title__container">
          <h3>{product.title}</h3>
          <p><span>${product.price}</span></p>
        </div>
        <p className='product__preview__description'>{product.description}</p>
        <div className="product__preview__order__container">
          <a className="product__preview__order" href="#order_now">Order a delivery</a>
          <a href="#order_now"><MdOutlineDirectionsBike/></a>
        </div>
      </div>
    </div>
  )
}

const Specials = () => {

  const images = {
    "greekSalad": greekSalad,
    "bruchetta": bruchetta,
    "lemonDessert": lemonDessert
  }


  return (
    <section className='specials'>
        <div className='specials__title__container'>
            <h2 className='specials__title'>This weeks specials!</h2>
            <a href="#menu" className="btn__primary">Online Menu</a>
        </div>
        <div className='specials__container'>
           {console.log(images)}
            {specials.map(special => (
                <ProductPreview key={special.id} product={special} image={images[special.id]}/>
            ))}
        </div>
    </section>
  )
}

export default Specials;