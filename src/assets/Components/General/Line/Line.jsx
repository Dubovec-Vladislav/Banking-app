import React from 'react'
import style from './Line.module.scss'

function Line({ text }) {
  return (
    <div className={style.line}>{text}</div>
  );
};

export default Line;