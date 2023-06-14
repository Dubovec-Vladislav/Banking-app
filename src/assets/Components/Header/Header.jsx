import React from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import BurgerMenu from './BurgerMenu';

function Header(props) {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><img src="#" alt="logo" /></div>
        <nav className={style.menu}>
          <ul className={style.list}>
            <Link name={"Главная"} />
            <Link name={"Преимущества"} />
            <Link name={"Галерея"} />
            <Link name={"Контакты"} />
            <Link name={"Заказать звонок"} />
          </ul>
        </nav>
        <BurgerMenu />
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