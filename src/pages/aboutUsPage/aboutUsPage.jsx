import React from "react";
import Box1 from "../../boxes/box1/box1";
import Box2 from "../../boxes/box2/box2";
import Box3 from "../../boxes/box3/box3";
import Box4 from "../../boxes/box4/box4";
import Box5 from "../../boxes/box5/box5";
import Box6 from "../../boxes/box6/box6";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./aboutUsPage.css";
import Box7 from "../../boxes/box7/box7";

function aboutUsPage() {
  return (
    <div className="container">
      <Header />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
      <Box7 />
      <Footer />
    </div>
  );
}

export default aboutUsPage;
