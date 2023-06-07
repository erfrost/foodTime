import React from "react";
import logo from "../../assets/logoFooter.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-content">
        <div className="footer-column-1">
          <img className="header-logo" src={logo} alt="logo" />
          <div className="footer-column-1-text">
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
            convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
            Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.{" "}
          </div>
        </div>
        <div className="footer-column-2">
          <div className="footer-column-links">
            <div className="footer-chapter">Быстрые ссылки</div>
            <div className="footer-links">
              <div className="link">Меню</div>
              <div className="link">Меню</div>
              <div className="link">Регистрация</div>
            </div>
          </div>
          <div className="footer-column-links">
            <div className="footer-chapter">Информация</div>
            <div className="footer-links">
              <div className="link">О нас</div>
              <div className="link">Администрация</div>
              <div className="link">Контакты</div>
            </div>
          </div>
          <div className="footer-column-links">
            <div className="footer-chapter">Общественное</div>
            <div className="footer-links">
              <div className="link">Facebook</div>
              <div className="link">Twitter</div>
              <div className="link">Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
