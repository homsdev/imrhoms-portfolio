import React from 'react'

import './Banner.scss'

import avatar from '../../assets/img/avatar.png'

const Banner = () => {
  return (
    <div className='hero'>
      <img src={avatar} alt="hero"  />
    </div>
  )
}

export default Banner
