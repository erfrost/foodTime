import React from "react";
import image from "../../assets/box6Image.svg";
import appStore from "../../assets/appStore.svg";
import googlePlay from "../../assets/googlePlay.svg";
import "./box6.css";

const Box6 = () => {
  return (
    <div className="box-6-main">
      <div className="box-6-content">
        <div className="box-6-left">
          <div className="box-6-text-1">Положи нас в свой карман</div>
          <div className="box-6-text-2">
            Скачайте наше приложение из Google Play или app Store, и вам больше
            не придется беспокоиться о своей еде.
          </div>
          <div className="downloading">
            <img className="download-btn" src={appStore} alt="appStore" />
            <img className="download-btn" src={googlePlay} alt="googlePlay" />
          </div>
        </div>
        <img className="box-6-image" src={image} alt="box6-right" />
      </div>
    </div>
  );
};

export default Box6;
