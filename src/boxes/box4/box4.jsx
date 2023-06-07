import React from "react";
import arrow from "../../assets/arrow.svg";
import "./box4.css";

const Box4 = () => {
  return (
    <div className="box-4-main">
      <div className="box-4-content">
        <div className="box-4-text-1">Хотите принять участие в Foodtime?</div>
        <div className="box-4-text-2">
          Не забудьте указать свой ресторан или магазин.
        </div>
        <div className="box-4-btn">
          <span>Начать</span>
          <img className="arrow" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Box4;
