import React, { useState } from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import BurgerMenu from './BurgerMenu';

function Header(props) {
  const [isBurgerActive, setBurgerActive] = useState(false);

  function notifyHeaderMenu() {
    setBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  };

  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><img src="#" alt="logo" /></div>
        {isBurgerActive ?
          <nav className={style.menu} style={{ top: "0", opacity: "1" }}>
            <ul className={style.list}>
              <Link name={"Главная"} />
              <Link name={"Преимущества"} />
              <Link name={"Галерея"} />
              <Link name={"Контакты"} />
              <Link name={"Заказать звонок"} />
            </ul>
          </nav>
          :
          <nav className={style.menu}>
            <ul className={style.list}>
              <Link name={"Главная"} />
              <Link name={"Преимущества"} />
              <Link name={"Галерея"} />
              <Link name={"Контакты"} />
              <Link name={"Заказать звонок"} />
            </ul>
          </nav>
        }
        <BurgerMenu notifyHeaderMenu={() => notifyHeaderMenu()} />
      </div>
    </div>
  );
};

function Link({ name }) {
  return (
    <li className={style.item}>
      <NavLink to="#" className={style.link}>{name}</NavLink>
    </li>
  );
};

export default Header;