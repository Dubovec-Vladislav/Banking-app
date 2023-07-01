import React, { FC } from 'react'
import style from './Button.module.scss'


// --------------------------------------------- //
//                   # Button                    //
// --------------------------------------------- //

interface IButtonProps {
  text: string;
}

const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <div className={style.btn}>{text}</div>
  );
};

// --------------------------------------------- //
//                   End Button                  //
// --------------------------------------------- //


export default Button;