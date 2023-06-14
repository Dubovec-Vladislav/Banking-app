import React from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Design from './Design/Design'

function Main(props) {
  return (
    <div className="main">
      <Hello />
      <Design />
    </div>
  );
};

export default Main;