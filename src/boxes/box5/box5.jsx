import React, { useState } from "react";
import "./box5.css";
import Accordions from "../../components/accordions/accordions";

const Box5 = () => {
  const [switchAccordion, setSwitchAccordion] = useState("General");

  return (
    <div className="box-5-main">
      <div className="box-5-content">
        <div className="box-5-switch">
          <div className="switch-text">Часто задаваемые вопросы</div>
          <div className="switch-buttons">
            <div
              className={
                switchAccordion === "General"
                  ? "switch-btn switch-active"
                  : "switch-btn"
              }
              onClick={() => setSwitchAccordion("General")}
            >
              Общие
            </div>
            <div
              className={
                switchAccordion === "Bussines"
                  ? "switch-btn switch-active"
                  : "switch-btn"
              }
              onClick={() => setSwitchAccordion("Bussines")}
            >
              Для бизнеса
            </div>
          </div>
        </div>
        <Accordions />
      </div>
    </div>
  );
};

export default Box5;
