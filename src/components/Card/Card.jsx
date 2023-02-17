import React from 'react'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import './Card.scss';

import p1 from '../../assets/img/projects/p-001.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, color }) => {
  return (
    <div className='card'>
      <div className="card-img">
        <a href='#s' className="card-link">
          <span>{title}
            <FontAwesomeIcon className='icon' icon={faArrowCircleRight} />
          </span>
        </a>
        <img src={p1} alt="" />
      </div>
      <div className="card-details">
        <p>{description}</p>
        <div className="circle" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: "Project Name",
  description: "Project description",
  color: "green"
}


export default Card;
