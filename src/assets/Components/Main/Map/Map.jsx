import React from 'react'
import style from './Map.module.scss'
import Line from '../../General/Line/Line'
import Button from '../../General/Button/Button'

function Map(props) {
  return (
    <div className={style.block} id="contacts">
      <div className={style.line}><Line text={"Где можно сделать нашу карту?"} /></div>
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.title}>Санкт-Петербург, Киевская 14</div>
          <div className={style.text}>Ваша новая металлическая карта в 5 минутах от метро</div>
          <div className={style.workingtime}>
            <p>График работы:</p>
            <p>ПН-ПТ — С 10:00 ДО 22:00</p>
            <p>СБ-ВС — С 10:00 ДО 20:00</p>
          </div>
          <div className={style.btn}><Button text={"Позвонить"} /></div>
        </div>
        <div className={style.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20152.732479298542!2d30.29942251119861!3d59.925427342637114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963101cbde855f%3A0x988ea2a7d8ab1281!2z0J7RhNC40YEg0KbQtdC90YLRgCDQotGA0Log0KHQtdC90L3QsNGP!5e0!3m2!1sru!2sby!4v1686992978719!5m2!1sru!2sby" title="Map"></iframe>
        </div>
      </div>
    </div >
  );
};

export default Map;