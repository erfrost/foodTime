import React from "react";
import logo from "../../assets/logoHeader.svg";
import "./header.css";
import Navigation from "../navigation/navigation";
import Account from "../account/account";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavigation from "../mobileNavigation/mobileNavigation";

const Header = () => {
  const mobileMenu = useMediaQuery({ maxWidth: "650px" });

  return (
    <div className="header-body">
      <div className="header-main">
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
        {!mobileMenu ? (
          <>
            {" "}
            <Navigation />
            <Account />
          </>
        ) : (
          <MobileNavigation />
        )}
      </div>
    </div>
  );
};

export default Header;
