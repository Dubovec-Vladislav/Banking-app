import React from 'react'
import style from './Design.module.scss'
import Button from '../../General/Button/Button'

function Design(props) {
  return (
    <div className={style.block} id="design">
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.img}></div>
          <div className={style.title}>Стандартный дизайн</div>
          <div className={style.text}> Создайте в конструкторе собственный дизайн карты за 3 шага. 7 роскошных текстур металла, десятки стильных оформлений и шрифтов</div>
          <div className={style.btn}><Button text={"Заказать за 1790₽"} /></div>
        </div>
        <div className={style.right}>
          <div className={style.img}></div>
          <div className={style.title}>Индивидуальный дизайн</div>
          <div className={style.text}>Персональная разработка карты под ваши запросы. Эксклюзивные дизайнерские решения только для вас.</div>
          <Button text={"Заказать за 4990₽"} />
        </div>
      </div>
    </div>
  );
};

export default Design;