import React, { FC } from 'react'
import style from './Popup.module.scss'
import Button from '../General/Button'


// --------------------------------------------- //
//                    # Popup                    //
// --------------------------------------------- //

interface IPopupProps {
  isPopupActive: boolean;
  handlePopupClick: () => void;
}

const Popup: FC<IPopupProps> = ({ isPopupActive, handlePopupClick }) => {
  return (
    <div className={`${style.block} ${isPopupActive ? style.blockActive : ""}`}>
      <div className={style.body}>
        <div className={style.header} onClick={handlePopupClick}>
          Logo
        </div>
        <div className={style.form}>
          <div className={style.formTitle}>Заказать звонок</div>
          <div className={style.item}>
            <label className={style.itemLabel}>Имя</label>
            <div className={style.itemField}><input type="text" /></div>
          </div>
          <div className={style.item}>
            <label className={style.itemLabel}>Номер телефона</label>
            <div className={style.itemField}><input type="text" /></div>
          </div>
          <button className={style.btn} onClick={handlePopupClick}><Button text={"Отправить"} /></button>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                    End Popup                  //
// --------------------------------------------- //


export default Popup;