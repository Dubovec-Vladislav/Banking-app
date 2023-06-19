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
        <div className={style.logo}>Logo</div>
        {isBurgerActive ?
          <nav className={`${style.menu} ${style.activeMenu}`}>
            <ul className={style.list}>
              <Link name={"Главная"} path={"/"} isLinkActive={true} />
              <Link name={"Преимущества"} path={"/1"} />
              <Link name={"Галерея"} path={"/2"} />
              <Link name={"Контакты"} path={"/3"} />
              <Link name={"Заказать звонок"} path={"/4"} />
            </ul>
          </nav>
          :
          <nav className={style.menu}>
            <ul className={style.list}>
              <Link name={"Главная"} path={"/"} isLinkActive={true} />
              <Link name={"Преимущества"} path={"/1"} />
              <Link name={"Галерея"} path={"/2"} />
              <Link name={"Контакты"} path={"/3"} />
              <Link name={"Заказать звонок"} path={"/4"} />
            </ul>
          </nav>
        }
        <BurgerMenu notifyHeaderMenu={() => notifyHeaderMenu()} />
      </div>
    </div >
  );
};

function Link({ name, path, isLinkActive }) {
  return (
    <>
      {isLinkActive ?
        <li className={style.item}>
          <NavLink to={path} className={`${style.link} ${style.activeLink}`}>{name}</NavLink>
        </li>
        :
        <li className={style.item}>
          <NavLink to={path} className={style.link}>{name}</NavLink>
        </li>
      }
    </>
  );
};

export default Header;