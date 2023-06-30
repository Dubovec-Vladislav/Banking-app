import React, { FC } from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'
import Advantages from './Advantages/Advantages'
import DesignSlider from './DesignSlider/DesignSlider'
import Map from './Map/Map'
import CardSlider from './CardSlider/CardSlider'


// --------------------------------------------- //
//                    # Main                     //
// --------------------------------------------- //

const Main: FC = () => {
  return (
    <div className="main">
      <Hello />
      <Design />
      <Advantages />
      <DesignSlider />
      <Map />
      <CardSlider />
    </div>
  );
};

// --------------------------------------------- //
//                    End Main                   //
// --------------------------------------------- //


export default Main;