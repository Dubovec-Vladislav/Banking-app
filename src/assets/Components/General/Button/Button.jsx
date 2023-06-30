import React from 'react'
import style from './Button.module.scss'

function Button({ text }) {
  return (
    <div className={style.btn}>{text}</div>
  );
};

export default Button;