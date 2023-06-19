import React, { useState } from 'react'
import style from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
import { Link, animateScroll as scroll } from "react-scroll"
import { NavLink } from 'react-router-dom';

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
              <MyLink name={"Дизайн"} to={"design"} thisPageLink={true}></MyLink>
              <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} />
              <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} />
              <MyLink name={"Галерея"} to={"/gallery"} />
              <MyLink name={"Заказать звонок"} to={"#"} />
            </ul>
          </nav>
          :
          <nav className={style.menu}>
            <ul className={style.list}>
              <MyLink name={"Дизайн"} to={"design"} thisPageLink={true}></MyLink>
              <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} />
              <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} />
              <MyLink name={"Галерея"} to={"/gallery"} />
              <MyLink name={"Заказать звонок"} to={"#"} />
            </ul>
          </nav>
        }
        <BurgerMenu notifyHeaderMenu={() => notifyHeaderMenu()} />
      </div>
    </div >
  );
};

function MyLink({ name, to, thisPageLink }) {
  return (
    <>
      {thisPageLink ?
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