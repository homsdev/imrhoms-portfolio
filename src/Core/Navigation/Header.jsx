import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSuitcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/icons/logo.svg';

import portfolio from '../../assets/icons/apps.png';
import contact from '../../assets/icons/chat.png';
import home from '../../assets/icons/home.png';
import about from '../../assets/icons/user.png';
import forward from '../../assets/icons/forward.png'

import '../../sass/layout/normalize.scss';
import './Header.scss';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <img src={logo} alt="Logo" />
                <span>iMrHoms_</span>
                <a href='#'>
                    Portfolio
                    <img src={forward} alt="Portfolio" srcset="" />
                </a>
            </div>

            <div className="navbar-collapsible">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link">
                            <span>Home</span>
                            <img src={home} alt="Home" srcset="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link">
                            <span>Portfolio</span>
                            <img src={portfolio} alt="Portfolio" srcset="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link">
                            <span>About Me</span>
                            <img src={about} alt="About" srcset="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link">
                            <span>Contact</span>
                            <img src={contact} alt="Contact" srcset="" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
