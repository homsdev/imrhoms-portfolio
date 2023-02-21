import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import logo from "../../assets/icons/logo.svg";

import portfolio from "../../assets/icons/apps.png";
import contact from "../../assets/icons/chat.png";
import home from "../../assets/icons/home.png";
import about from "../../assets/icons/user.png";
import forward from "../../assets/icons/forward.png";

import "../../sass/layout/normalize.scss";
import "./Header.scss";
import { NavItem } from "./NavItem";

const menuItems = [
  {
    text: "Home",
    icon: home,
    route: "/",
  },
  {
    text: "Portfolio",
    icon: portfolio,
    route: "/portfolio",
  },
  {
    text: "About",
    icon: about,
    route: "/about",
  },
  {
    text: "Contact",
    icon: contact,
    route: "/contact",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);
  const collapsibleRef = useRef(null);

  const toggleActive = () => {
    setActive(!active);
    if (active) {
      navRef.current.classList.add("active");
      collapsibleRef.current.classList.add("active");
    } else {
      navRef.current.classList.remove("active");
      collapsibleRef.current.classList.remove("active");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>iMrHoms_</span>
        </div>
        <Link className="navbar-badge" to="/portfolio">
          Portfolio
          <img src={forward} alt="Portfolio" srcset="" />
        </Link>
        <button className="navbar-toggler" onClick={toggleActive}>
          <span ref={navRef} className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div ref={collapsibleRef} className="navbar-collapsible">
        <ul className="navbar-nav">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              itemIcon={item.icon}
              itemText={item.text}
              route={item.route}
              onStatusChange={() => toggleActive()}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
