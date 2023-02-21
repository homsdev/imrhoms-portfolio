import { Link as RouterLink } from "react-router-dom";

import React from "react";

import "./NavItem.scss";

const abecedary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const NavItem = ({ itemText, itemIcon, route, onStatusChange }) => {
  const turnLetters = (text, currentIteration) => {
    let letters = text.split("");
    letters = letters.map((letter, index) => {
      if (index < currentIteration) return letter;
      else {
        return abecedary[Math.floor(Math.random() * 26)];
      }
    });
    return letters.join("");
  };

  const textHoverEffect = (e) => {
    let target = e.target;
    let originalText = e.target.dataset.value;
    let maxIterations = originalText.length;
    let iteration = 1;

    const interval = setInterval(() => {
      target.innerText = turnLetters(originalText, iteration);
      if (iteration > maxIterations) {
        clearInterval(interval);
      }
      iteration += 1 / 4;
    }, 30);
  };

  return (
    <li className="nav-item">
      <RouterLink className="nav-link" to={route} onClick={onStatusChange}>
        <span onMouseOver={textHoverEffect} data-value={itemText}>
          {itemText}
        </span>
        <img src={itemIcon} alt="Home" srcset="" />
      </RouterLink>
    </li>
  );
};
