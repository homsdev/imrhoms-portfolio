import React from 'react'

import './Banner.scss'

import avatar from '../../assets/img/avatar.png'
import java from '../../assets/icons/java.png'
import react from '../../assets/icons/react.png'

const Banner = () => {
  return (
    <div className='bg'>
      <div className='hero'>
        <img src={avatar} alt='hero' />
      </div>
      <div className='label'>
          <span>Fullstack Developer</span>
          <div className="icons">
            <img src={java} alt="Java"  />
            <img src={react} alt="React"  />
          </div>
      </div>
    </div>

  )
}

export default Banner
