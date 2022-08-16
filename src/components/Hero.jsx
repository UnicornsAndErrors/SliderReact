import React from 'react'


const Hero = ({image}) => {
  return (
    <div className="hero">
        <img src={image} alt="plaza1" className="hero__image" />
        <h1 className="hero__title">Lorem Ipsum</h1>
    </div>
  )
}

export default Hero