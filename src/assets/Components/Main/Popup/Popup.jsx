import React from 'react'
import style from './Popup.module.scss'
import Button from '../General/Button';
// document.body.classList.toggle('_lock')
function Popup({ isPopupActive, handlePopupClick }) {
  return (
    <>
      {isPopupActive ?
        <div className={`${style.block} ${style.blockActive}`}>
          <div className={style.body}>
            <div className={style.header} onClick={handlePopupClick}>
              Logo
            </div>
            <div className={style.form}>
              <div className={style.formTitle}>Заказать звонок</div>
              <div className={style.item}>
                <label className={style.itemLabel}>Имя</label>
                <div className={style.itemField}>
                  <input type="text" />
                </div>
              </div>
              <div className={style.item}>
                <label className={style.itemLabel}>Номер телефона</label>
                <div className={style.itemField}>
                  <input type="text" />
                </div>
              </div>
              <button className={style.btn}><Button text={"Отправить"} /></button>
            </div>
          </div>
        </div>
        :
        <div className={style.block}>
          <div className={style.body}>
            <div className={style.header}>
              Header
            </div>
            <div className={style.form}>
              <div className={style.formTitle}>Заказать звонок</div>
              <div className={style.item}>
                <label className={style.itemLabel}>Имя</label>
                <div className={style.itemField}>
                  <input type="text" />
                </div>
              </div>
              <div className={style.item}>
                <label className={style.itemLabel}>Номер телефона</label>
                <div className={style.itemField}>
                  <input type="text" />
                </div>
              </div>
              <button className={style.btn}><Button text={"Отправить"} /></button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Popup;