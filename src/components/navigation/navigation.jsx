import React, { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="navigation-block">
      <Link className="navigation-item" to="/menu">
        Меню
      </Link>
      <Link className="navigation-item" to="/">
        О нас
      </Link>
      <div
        className="navigation-item"
        onClick={() =>
          setLanguage((prevState) => (prevState === "EN" ? "RU" : "EN"))
        }
      >
        {language}
      </div>
    </div>
  );
};

export default Navigation;
