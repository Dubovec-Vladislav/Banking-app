import React, { useState } from 'react'
import style from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
// import { Link, animateScroll as scroll } from "react-scroll"
import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom';

function Header({ handlePopupClick }) {
  const [isBurgerActive, setBurgerActive] = useState(false);

  function handleBurgerClick() {
    setBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  };

  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><NavLink to="/">Logo</NavLink></div>
        {isBurgerActive ?
          <nav className={`${style.menu} ${style.activeMenu}`}>
            <ul className={style.list}>
              <MyLink name={"Дизайн"} to={"design"} thisPageLink={true}></MyLink>
              <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} />
              <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} />
              <MyLink name={"Галерея"} to={"/gallery"} />
              <MyLink
                name={"Заказать звонок"}
                thisPageLink={true}
                popup={true}
                handlePopupClick={handlePopupClick}
              />
            </ul>
          </nav>
          :
          <nav className={style.menu}>
            <ul className={style.list}>
              <MyLink name={"Дизайн"} to={"design"} thisPageLink={true}></MyLink>
              <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} />
              <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} />
              <MyLink name={"Галерея"} to={"/gallery"} />
              <MyLink
                name={"Заказать звонок"}
                thisPageLink={true}
                popup={true}
                handlePopupClick={handlePopupClick}
              />
            </ul>
          </nav>
        }
        <BurgerMenu isBurgerActive={isBurgerActive} handleBurgerClick={handleBurgerClick} />
      </div>
    </div>
  );
};

function MyLink({ name, to, thisPageLink, popup, handlePopupClick }) {
  // debugger;
  return (
    <>
      {thisPageLink ?
        popup ?
          <li className={style.item}>
            <Link
              className={style.link}
              to={"hello"}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
              onClick={handlePopupClick}
            >
              {name}
            </Link>
          </li>
          :
          <li className={style.item}>
            <Link
              className={style.link}
              to={to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              {name}
            </Link>
          </li>
        :
        <li className={style.item}>
          <NavLink className={style.link} to={to}>{name}</NavLink>
        </li>
      }
    </>
  );
};

export default Header;