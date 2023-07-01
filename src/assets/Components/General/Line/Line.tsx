import React, { FC } from 'react'
import style from './Line.module.scss'


// --------------------------------------------- //
//                    # Line                     //
// --------------------------------------------- //

interface ILineProps {
  text: string;
}

const Line: FC<ILineProps> = ({ text }) => {
  return (
    <div className={style.line}>{text}</div>
  );
};

// --------------------------------------------- //
//                    End Line                   //
// --------------------------------------------- //


export default Line;