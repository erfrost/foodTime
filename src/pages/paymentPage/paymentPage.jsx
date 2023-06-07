import React from "react";
import Header from "../../components/header/header";
import {
  cartItemsState,
  cartNarkinsState,
  cartOptionsState,
} from "../../storage/atoms/main";
import { useRecoilValue } from "recoil";

const PaymentPage = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const options = useRecoilValue(cartOptionsState);
  const narkins = useRecoilValue(cartNarkinsState);

  const totalCart = [...cartItems, ...options, narkins];

  return (
    <div className="container">
      <Header />
      <div>Тут типа оплата:</div>
      {totalCart.map((item) => (
        <div>
          {item.cartCount ? `${item.title}, ${item.cartCount}шт.` : item.title}
        </div>
      ))}
    </div>
  );
};

export default PaymentPage;
