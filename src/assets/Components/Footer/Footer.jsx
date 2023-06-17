import React from 'react'
import style from './Footer.module.scss'
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.column}>
            <div className={style.title}>Разделы</div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Услуги</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Преимущества</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Галерея</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Контакты</Link>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.title}>Разделы</div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Номер телефона</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Вконтакте</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Телеграм</Link>
            </div>
            <div className={style.item}>
              <Link href="#" className={style.link}>Инстаграм</Link>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <Link className={style.footerItem}>© 2022–2023   OOO StyleCards</Link>
          <Link className={style.footerItem}>Политика конфиденциальности</Link>
          <Link className={style.footerItem}>Публичная оферта</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;