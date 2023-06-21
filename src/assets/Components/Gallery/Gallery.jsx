import React from 'react'
import style from './Gallery.module.scss'
import { Link } from 'react-router-dom';

function Gallery(props) {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.title}>Галерея</div>
          <Link className={style.home} to="/"><img src="/img/arrow-left.svg" alt="arrow-left" /> На главную</Link>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-1.jpg" alt="gallery-1" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-2.jpg" alt="gallery-2" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-3.jpg" alt="gallery-3" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-4.jpg" alt="gallery-4" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-5.jpg" alt="gallery-5" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-6.jpg" alt="gallery-6" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-7.jpg" alt="gallery-7" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-8.jpg" alt="gallery-8" /></div>
          </div>
          <div className={style.column}>
            <div className={style.item}><img src="/img/Gallery/gallery-9.jpg" alt="gallery-9" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;