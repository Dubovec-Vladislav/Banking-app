import React from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'
import Advantages from './Advantages/Advantages'

function Main(props) {
  return (
    <div className="main">
      <Hello />
      <Design />
      <Advantages />
    </div>
  );
};

export default Main;