import React, { useState } from 'react'
import './BurgerMenu.scss'

function BurgerMenu(props) {
  const [isBurgerActive, setBurgerActive] = useState(false);

  function handleBurgerClick() {
    setBurgerActive(!isBurgerActive);
  };

  return (
    <div className={`burger ${isBurgerActive ? "_active" : ""}`} onClick={handleBurgerClick}>
      <img className="telephone" src="img/telephone.svg" alt="telephone" />
      <span></span>
    </div>
  );
};

export default BurgerMenu;