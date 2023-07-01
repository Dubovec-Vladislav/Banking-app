import React, { FC } from 'react'
import style from './Advantages.module.scss'
import Line from '../../General/Line/Line'


// --------------------------------------------- //
//                 # Advantages                  //
// --------------------------------------------- //

const Advantages: FC = () => {
  return (
    <div className={style.block} id="advantages">
      <div className={style.line}><Line text={"6 причин выбрать нас"} /></div>
      <div className={style.body}>
        <div className={style.row}>
          <AdvantagesCard imgPath={"img/Advantages/card-1.svg"} imgName={"card-1"} title={"Премиально"}
            text={"Изящность, прочность, уникальный дизайн. Каждая оплата картой — доза удовольствия"} />
          <AdvantagesCard imgPath={"img/Advantages/card-2.svg"} imgName={"card-2"} title={"Безопасно"}
            text={"Ювелирно извлекаем чип из вашей пластиковой карты, сохраняя функциональность"} />
          <AdvantagesCard imgPath={"img/Advantages/card-3.svg"} imgName={"card-3"} title={"Быстро"}
            text={"Делаем карту за 5 минут с помощью лазерного станка прямо на ваших глазах"} />
        </div>
        <div className={style.row}>
          <AdvantagesCard imgPath={"img/Advantages/card-4.svg"} imgName={"card-4"} title={"Доступно"}
            text={"Меняем карты любого банка. Пластиковые исходники возвращаем"} />
          <AdvantagesCard imgPath={"img/Advantages/card-5.svg"} imgName={"card-5"} title={"Надежно"}
            text={"Металл не царапается, сохраняет первоначальный вид через 1000 операций"} rotate={true} />
          <AdvantagesCard imgPath={"img/Advantages/card-6.svg"} imgName={"card-6"} title={"Конфиденциально"}
            text={"Данные карты не запрашиваем, не передаём 3-им лицам"} />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------- //
//                 End Advantages                //
// --------------------------------------------- //


// --------------------------------------------- //
//               # Advantages card               //
// --------------------------------------------- //

interface IAdvantagesCardProps {
  imgPath: string;
  imgName: string;
  title: string;
  text: string;
  rotate?: boolean;
}

const AdvantagesCard: FC<IAdvantagesCardProps> = ({ imgPath, imgName, title, text, rotate }) => {
  return (
    <div className={`${style.column} ${rotate ? style.rotate : ""}`}>
      <div className={style.item}>
        <div className={style.img}><img src={imgPath} alt={imgName} /></div>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
      </div>
    </div>
  );
}

// --------------------------------------------- //
//               End Advantages card             //
// --------------------------------------------- //


export default Advantages;