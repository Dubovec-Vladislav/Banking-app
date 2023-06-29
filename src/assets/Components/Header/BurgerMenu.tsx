import React, { FC, MouseEvent } from 'react'
import './BurgerMenu.scss';

interface BurgerMenuProps {
  isBurgerActive: boolean;
  handleBurgerClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerActive, handleBurgerClick }) => {
  return (
    <div className={`burger ${isBurgerActive ? "_active" : ""}`} onClick={handleBurgerClick}>
      <img className="telephone" src="img/telephone.svg" alt="telephone" />
      <span></span>
    </div>
  );
};

export default BurgerMenu;
