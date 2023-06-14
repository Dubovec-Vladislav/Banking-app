import React from 'react'
import style from './Hello.module.scss'
import Button from '../General/Button'

function Hello(props) {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.textSide}>
          <div className={style.title}>Металлические карты</div>
          <div className={style.text}>
            Премиальное перевоплощение:
            из обычной пластиковой банковской карты —
            в дизайнерскую карту из металла
          </div>
          <Button text={"Создать дизайн"} />
        </div>
        <div className={style.imgSide}>
          <img src="/img/leo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hello;