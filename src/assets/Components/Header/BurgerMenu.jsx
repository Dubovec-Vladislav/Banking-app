import React from 'react'
import './BurgerMenu.scss'

function BurgerMenu({ isBurgerActive, handleBurgerClick }) {
  return (
    <div className={`burger ${isBurgerActive ? "_active" : ""}`} onClick={handleBurgerClick}>
      <img className="telephone" src="img/telephone.svg" alt="telephone" />
      <span></span>
    </div>
  );
};

export default BurgerMenu;