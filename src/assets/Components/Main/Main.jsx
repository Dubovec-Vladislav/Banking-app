import React from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'
import Advantages from './Advantages/Advantages'
import DesignSlider from './DesignSlider/DesignSlider'

function Main(props) {
  return (
    <div className="main">
      <Hello />
      <Design />
      <Advantages />
      <DesignSlider />
    </div>
  );
};

export default Main;