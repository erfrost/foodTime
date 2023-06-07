import React, { useRef, useState } from "react";
import "./cartPage.css";
import Header from "../../components/header/header";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import TablewareCart from "../../components/tablewareCart/tablewareCart";
import CartCounter from "../../components/cartCounter/cartCounter";
import ClearIcon from "@mui/icons-material/Clear";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartItemsState,
  cartNarkinsState,
  cartOptionsState,
  promocodesState,
} from "../../storage/atoms/main";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [options, setOptions] = useRecoilState(cartOptionsState);
  const [narkins, setNarkins] = useRecoilState(cartNarkinsState);
  const promocodes = useRecoilValue(promocodesState);
  const [promocodeInput, setPromocodeInput] = useState("");
  const [promocodeIndex, setPromocodeIndex] = useState(null);
  const optionsRef = useRef(options);

  const handlePromocode = () => {
    const index = promocodes.findIndex(
      (el) => el.title === promocodeInput.toLowerCase()
    );

    setPromocodeIndex(index);
  };

  return (
    <div className="container">
      <Header />
      <div className="cartPage">
        <div className="cartPage-title">Промокод</div>
        <div className="promocode">
          <TextField
            id="filled-basic"
            label="Промокод"
            variant="filled"
            className="promocode-textfield"
            disabled={
              promocodeIndex !== -1 && promocodeIndex !== null ? true : false
            }
            value={promocodeInput}
            onChange={(e) =>
              setPromocodeInput((prevState) =>
                prevState.length < 12 ? e.target.value : prevState
              )
            }
          />
          <Button
            variant="contained"
            className="promocode-btn"
            sx={
              promocodeIndex !== -1 && promocodeIndex !== null
                ? { color: "#d4d4d4 !important" }
                : null
            }
            disabled={
              promocodeIndex !== -1 && promocodeIndex !== null ? true : false
            }
            onClick={handlePromocode}
          >
            Активировать
          </Button>
        </div>
        <div className="cartPage-title">Опции</div>
        <div className="cart-options">
          <FormControlLabel
            control={<Checkbox className="cart-checkbox" />}
            label="Приборы не понадобятся"
            className="formContol-label"
            onClick={() =>
              setOptions((prevState) =>
                prevState.length === 0 ? optionsRef.current : []
              )
            }
          />
          <FormControlLabel
            control={<Checkbox className="cart-checkbox" />}
            label="Салфетки не нужны"
            className="formContol-label"
            onClick={() =>
              setNarkins((prevState) => {
                if (prevState.state) {
                  return {
                    ...prevState,
                    state: false,
                  };
                } else {
                  return {
                    ...prevState,
                    state: true,
                  };
                }
              })
            }
          />
          <div className="tableware">
            {options?.map((op, index) => (
              <TablewareCart title={op.props} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className="cartPage-title">Ваш заказ</div>
        <div className="currentCart">
          {cartItems?.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-left">
                  <div className="cart-item-image"></div>
                  <div className="cart-item-title">{item.title}</div>
                </div>
                <div className="cart-item-right">
                  <CartCounter itemIndex={index} />
                  <IconButton
                    onClick={() =>
                      setCartItems((prevState) =>
                        prevState.filter((item, i) => i !== index)
                      )
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                </div>
              </div>
            ))
          ) : (
            <div style={{ fontSize: "22px", letterSpacing: "2px" }}>
              В вашей корзине нет товаров
            </div>
          )}
        </div>
        {cartItems?.length > 0 ? (
          <>
            <div className="cartPage-title">Итого</div>
            <div className="totalPrice">
              <div className="totalPrice-text" style={{ minWidth: "250px" }}>
                <div className="text-aling-center">
                  Итого:
                  <span style={{ fontWeight: 500 }}>
                    {" " +
                      cartItems?.reduce((acc, item) => {
                        if (promocodeIndex !== -1 && promocodeIndex !== null) {
                          return Math.ceil(
                            acc +
                              (item.price * item.cartCount) /
                                promocodes[promocodeIndex]?.discountMath
                          );
                        } else return acc + item.price * item.cartCount;
                      }, 0) +
                      " ₽"}
                  </span>{" "}
                  {promocodeIndex !== -1 && promocodeIndex !== null ? (
                    <span
                      style={{ fontWeight: 500 }}
                    >{`(-${promocodes[promocodeIndex]?.discount})`}</span>
                  ) : null}
                </div>
              </div>
              <Link className="totalPrice-btn" to="/payment">
                Оформить заказ
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CartPage;
