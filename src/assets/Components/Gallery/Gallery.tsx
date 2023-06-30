import React, { FC } from 'react'
import style from './Gallery.module.scss'
import { Link } from 'react-router-dom'


// --------------------------------------------- //
//                   # Gallery                   //
// --------------------------------------------- //

const Gallery: FC = () => {
  return (
    <div className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.title}>Галерея</div>
          <Link className={style.home} to="/"><img src="/img/arrow-left.svg" alt="arrow-left" /> На главную</Link>
        </div>
        <div className={style.row}>
          <GalleryComponent name={"gallery-1.jpg"} alt={"gallery-1"} />
          <GalleryComponent name={"gallery-2.jpg"} alt={"gallery-2"} />
          <GalleryComponent name={"gallery-3.jpg"} alt={"gallery-3"} />
          <GalleryComponent name={"gallery-4.jpg"} alt={"gallery-4"} />
          <GalleryComponent name={"gallery-5.jpg"} alt={"gallery-5"} />
          <GalleryComponent name={"gallery-6.jpg"} alt={"gallery-6"} />
          <GalleryComponent name={"gallery-7.jpg"} alt={"gallery-7"} />
          <GalleryComponent name={"gallery-8.jpg"} alt={"gallery-8"} />
          <GalleryComponent name={"gallery-9.jpg"} alt={"gallery-9"} />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                   End Gallery                 //
// --------------------------------------------- //



// --------------------------------------------- //
//              # Gallery component              //
// --------------------------------------------- //

interface IGalleryComponentProps {
  name: string;
  alt: string;
}

const GalleryComponent: FC<IGalleryComponentProps> = ({ name, alt }) => {
  const path = "/img/Gallery/";
  return (
    <div className={style.column} >
      <div className={style.item}><img src={`${path}${name}`} alt={alt} /></div>
    </div >
  );
}

// --------------------------------------------- //
//              End Gallery component            //
// --------------------------------------------- //


export default Gallery;