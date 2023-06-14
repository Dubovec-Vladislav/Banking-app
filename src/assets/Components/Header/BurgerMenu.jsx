import React, { useState } from 'react'
import './BurgerMenu.scss'

function BurgerMenu({ notifyHeaderMenu }) {
  const [isBurgerActive, setBurgerActive] = useState(false);

  function handleBurgerClick() {
    setBurgerActive(!isBurgerActive);
    notifyHeaderMenu();
  };

  return (
    <div className={`burger ${isBurgerActive ? "_active" : ""}`} onClick={handleBurgerClick}>
      <img className="telephone" src="img/telephone.svg" alt="telephone" />
      <span></span>
    </div>
  );
};

export default BurgerMenu;