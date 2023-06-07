import React, { useEffect, useState } from "react";
import cart from "../../assets/cart.svg";
import "./account.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartItemsState } from "../../storage/atoms/main";

const Account = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const [reduceResult, setReduceResult] = useState(0);

  useEffect(() => {
    setReduceResult(
      cartItems?.reduce((acc, item) => {
        return acc + item.cartCount;
      }, 0)
    );
  }, [cartItems]);

  return (
    <div className="account-main">
      <Link className="account-login-btn" to="/login">
        Войти
      </Link>
      <Link className="cart-btn" to="/cart">
        <img className="cart-icon" src={cart} alt="cart" />
        {reduceResult > 0 ? (
          <div
            className="cart-count"
            style={reduceResult > 9 ? { fontSize: "13px" } : null}
          >
            {reduceResult}
          </div>
        ) : null}
      </Link>
    </div>
  );
};

export default Account;
