import React from "react";
import icon1 from "../../assets/box3Icon1.svg";
import icon2 from "../../assets/box3Icon2.svg";
import icon3 from "../../assets/box3Icon3.svg";
import "./box3.css";

const Box3 = () => {
  return (
    <div className="box-3-main">
      <div className="box-3-content">
        <div className="box-3-item">
          <div className="box-3-item-padding">
            <img className="box-3-image" src={icon1} alt="icon1" />
            <div className="item-text-1">Широкий выбор ресторанов</div>
            <div className="item-text-2">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
              tristique.
            </div>
          </div>
        </div>
        <div className="box-3-item">
          <div className="box-3-item-padding">
            <img className="box-3-image" src={icon2} alt="icon2" />
            <div className="item-text-1">Простой процесс оформления заказа</div>
            <div className="item-text-2">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
              tristique.
            </div>
          </div>
        </div>
        <div className="box-3-item">
          <div className="box-3-item-padding">
            <img className="box-3-image" src={icon3} alt="icon3" />
            <div className="item-text-1">Быстрая доставка в пределах 20 км</div>
            <div className="item-text-2">
              Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
              tristique.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box3;
