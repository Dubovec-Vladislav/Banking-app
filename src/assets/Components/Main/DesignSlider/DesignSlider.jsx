import React from 'react'
import { A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import './DesignSlider.scss'
import Line from '../General/Line'
import Button from '../General/Button'

function DesignSlider(props) {
  const breakpoints = {
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    426: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    371: {
      slidesPerView: 1.1,
      spaceBetween: 0,
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  };

  return (
    <div className="design-slider__block">
      <div className="design-slider__line"><Line text={"Посмотри на наши дизайны"} /></div>
      <div className="design-slider__menu">
        <div className="design-slider__social">
          <div className="design-slider__social-link"><img src="/img/DesignSlider/VK.svg" alt="VK" /></div>
          <div className="design-slider__social-link"><img src="/img/DesignSlider/Instagram.svg" alt="Instagram" /></div>
          <div className="design-slider__social-link"><img src="/img/DesignSlider/TikTok.svg" alt="TikTok" /></div>
        </div>
        <div className="design-slider__header-btn"><Button text={"Заказать"} /></div>
      </div>
      <Swiper
        className="design-slider"
        modules={[A11y]}
        loop={true}
        breakpoints={breakpoints}
      >
        <SwiperSlide><img src="/img/DesignSlider/design-1.jpg" alt="design-1" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-2.jpg" alt="design-2" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-3.jpg" alt="design-3" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-4.jpg" alt="design-4" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-1.jpg" alt="design-1" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-2.jpg" alt="design-2" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-3.jpg" alt="design-3" /></SwiperSlide>
        <SwiperSlide><img src="/img/DesignSlider/design-4.jpg" alt="design-4" /></SwiperSlide>
      </Swiper >
      <div className="design-slider__down-btn"><Button text={"Заказать"} /></div>
    </div>
  );
};

export default DesignSlider;