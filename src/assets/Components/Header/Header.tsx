import React, { useState, FC } from 'react'
import style from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom'


// --------------------------------------------- //
//                   # Header                    //
// --------------------------------------------- //

interface HeaderProps {
  handlePopupClick?: () => void;
}

const Header: FC<HeaderProps> = ({ handlePopupClick }) => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  };

  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><NavLink to="/">Logo</NavLink></div>
        <nav className={`${style.menu} ${isBurgerActive ? style.activeMenu : ""}`}>
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
        <BurgerMenu isBurgerActive={isBurgerActive} handleBurgerClick={handleBurgerClick} />
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Header                  //
// --------------------------------------------- //



// --------------------------------------------- //
//                 # Header link                 //
// --------------------------------------------- //

interface MyLinkProps extends HeaderProps {
  name: string;
  to?: string;
  thisPageLink?: boolean;
  popup?: boolean;
}

const MyLink: FC<MyLinkProps> = ({ name, to, thisPageLink, popup, handlePopupClick }) => {
  return (
    <>
      {thisPageLink ?
        popup ?
          <li className={style.item}>
            <Link className={style.link}
              to={"hello"}
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
              to={to || ""}
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
          <NavLink className={style.link} to={to || ""}>{name}</NavLink>
        </li>
      }
    </>
  );
};

// --------------------------------------------- //
//                 End Header Link               //
// --------------------------------------------- //


export default Header;