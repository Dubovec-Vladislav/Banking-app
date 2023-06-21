import React from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'
import Advantages from './Advantages/Advantages'
import DesignSlider from './DesignSlider/DesignSlider'
import Map from './Map/Map'
import CardSlider from './CardSlider/CardSlider'
import Popup from './Popup/Popup'

function Main({ isPopupActive, handlePopupClick }) {
  return (
    <div className="main">
      <Popup isPopupActive={isPopupActive} handlePopupClick={handlePopupClick}/>
      <Hello />
      <Design />
      <Advantages />
      <DesignSlider />
      <Map />
      <CardSlider />
    </div>
  );
};

export default Main;