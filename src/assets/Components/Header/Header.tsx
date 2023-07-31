import React, { useState, FC, MouseEvent } from 'react'
import style from './Header.module.scss'
import BurgerMenu from './BurgerMenu'
import { Link } from "react-scroll"
import { NavLink, Route, Routes } from 'react-router-dom'


// --------------------------------------------- //
//                   # Header                    //
// --------------------------------------------- //

interface IHeaderProps {
  handlePopupClick?: (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<IHeaderProps> = ({ handlePopupClick }) => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
    document.body.classList.toggle('_lock');
  };

  const Links = <>
    <MyLink name={"Дизайн"} to={"design"} thisPageLink={true} setBurgerActive={setBurgerActive} ></MyLink>
    <MyLink name={"Преимущества"} to={"advantages"} thisPageLink={true} setBurgerActive={setBurgerActive} />
    <MyLink name={"Контакты"} to={"contacts"} thisPageLink={true} setBurgerActive={setBurgerActive} />
    <MyLink name={"Примеры работ"} to={"cards"} thisPageLink={true} setBurgerActive={setBurgerActive} />
    <MyLink name={"Галерея"} to={"/gallery"} setBurgerActive={setBurgerActive} />
    {/* <MyLink name={"Заказать звонок"} thisPageLink={true} popup={true} handlePopupClick={handlePopupClick} /> */}
  </>


  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.logo}><NavLink to="/">Logo</NavLink></div>
        <nav className={`${style.menu} ${isBurgerActive ? style.activeMenu : ""}`}>
          <ul className={style.list}>
            <Routes>
              <Route path="/" element={Links}></Route>
              <Route path="/gallery" element={<MyLink name={"Домой"} to={"/"} setBurgerActive={setBurgerActive} />}></Route>
            </Routes>

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

interface IMyLinkProps extends IHeaderProps {
  name: string;
  to?: string;
  thisPageLink?: boolean;
  popup?: boolean;
  setBurgerActive: (isActive: boolean) => void;
}

const MyLink: FC<IMyLinkProps> = ({ name, to, thisPageLink, popup, setBurgerActive, handlePopupClick }) => {
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
              onClick={() => setBurgerActive(false)}
            >
              {name}
            </Link>
          </li>
        :
        <li className={style.item}>
          <NavLink className={style.link} to={to || ""} onClick={() => setBurgerActive(false)}>{name}</NavLink>
        </li>
      }
    </>
  );
};

// --------------------------------------------- //
//                 End Header Link               //
// --------------------------------------------- //


export default Header;