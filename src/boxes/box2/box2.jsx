import React from "react";
import box2Image from "../../assets/box2-image.svg";
import arrow from "../../assets/arrow.svg";
import "./box2.css";

const Box2 = () => {
  return (
    <div className="box-2-main">
      <div className="box-2-content">
        <div className="box-2-content-left">
          <div className="box-2-text-1">
            Познакомьтесь с кухней вашего любимого города
            <span style={{ color: "#FF8B00" }}>.</span>
          </div>
          <div className="box-2-text-2">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
            tristique. Non ligula tristique ut ut libero sit convallis maecenas.
            At egestas auctor porta mattis.
          </div>
          <div className="explore-btn">
            <span>Начать</span>
            <img className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
        <img className="box-2-image" src={box2Image} alt="box-2-svg" />
      </div>
    </div>
  );
};

export default Box2;
