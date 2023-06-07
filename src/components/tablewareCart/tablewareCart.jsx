import React from "react";
import FlatwareIcon from "@mui/icons-material/Flatware";
import "./tablewareCart.css";
import CartCounter from "../cartCounter/cartCounter";

const TablewareCart = ({ title, index }) => {
  return (
    <div className="tableware-item">
      <div className="tableware-item-padding">
        <div className="tableware-item-description">
          <FlatwareIcon />
          <div className="tableware-item-title">{title}</div>
        </div>
        <CartCounter title={title} index={index} />
      </div>
    </div>
  );
};

export default TablewareCart;
