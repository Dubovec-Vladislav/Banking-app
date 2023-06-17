import React from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'
import Advantages from './Advantages/Advantages'
import DesignSlider from './DesignSlider/DesignSlider'
import Map from './Map/Map'

function Main(props) {
  return (
    <div className="main">
      <Hello />
      <Design />
      <Advantages />
      <DesignSlider />
      <Map />
    </div>
  );
};

export default Main;