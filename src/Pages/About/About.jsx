import React from 'react'

import './About.scss';
import Me from '../../assets/img/Me.png';

const About = () => {
  return (
    <div className='about-section'>
        <div className="character-header">
            <h2>HomS</h2>
            <p>Fullstack Developer <span>Level 27</span></p>
        </div>
        <div className="character-jobs">
            <h3>Jobs Level</h3>
            <ul>
                <li>SpringBoot</li>
                <li>React</li>
                <li>Git</li>
                <li>Scrum</li>
            </ul>
        </div>
        <div className="character-footer">
            <a href="#none">Choose Character</a>
        </div>
        <div className="character-img">
            <img src={Me} alt="Me" />
        </div>
    </div>
  )
}

export default About
