import React from "react";
import "./cartCounter.css";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../../storage/atoms/main";
import { cartOptionsState } from "../../storage/atoms/main";

const CartCounter = ({ itemIndex, index, title }) => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [options, setOptions] = useRecoilState(cartOptionsState);
  const cartItem = cartItems[itemIndex];
  const optionItem = options[index];

  return (
    <>
      {!optionItem ? (
        <div className="tableware-count">
          <div className="inCart count">
            <IconButton
              sx={{ width: "27px", height: "27px" }}
              onClick={() => {
                if (cartItem.cartCount === 1) {
                  setCartItems((prevState) =>
                    prevState.map((item, i) => {
                      if (itemIndex || item.title === title) {
                        return {
                          ...item,
                          cartCount: 0,
                        };
                      }
                      return item;
                    })
                  );
                }
                if (cartItem.cartCount > 1) {
                  setCartItems((prevState) =>
                    prevState.map((item, i) => {
                      if (i === itemIndex) {
                        return {
                          ...item,
                          cartCount: item.cartCount - 1,
                        };
                      }
                      return item;
                    })
                  );
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
            <span>{cartItem?.cartCount}</span>
            <IconButton
              sx={{ width: "27px", height: "27px" }}
              onClick={() =>
                setCartItems((prevState) =>
                  prevState.map((item, i) => {
                    if (i === itemIndex) {
                      return {
                        ...item,
                        cartCount: item.cartCount + 1,
                      };
                    }
                    return item;
                  })
                )
              }
            >
              <AddIcon />
            </IconButton>
          </div>
          <div style={{ color: "#777c83", fontSize: "19px" }}>
            {cartItem.price * cartItem.cartCount + " ₽"}
          </div>
        </div>
      ) : (
        <>
          {optionItem.isOpen !== true ? (
            <div
              className="inCart"
              onClick={() =>
                setOptions((prevState) => {
                  const newArray = prevState.map((item, i) => {
                    if (i === index) {
                      return {
                        ...item,
                        isOpen: true,
                        cartCount: 1,
                      };
                    } else return item;
                  });
                  return newArray;
                })
              }
            >
              <span>В корзину</span>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="inCart count">
                <IconButton
                  sx={{ width: "27px", height: "27px" }}
                  onClick={() => {
                    if (optionItem.cartCount === 0) {
                      setCartItems((prevState) =>
                        prevState.map((item, i) => {
                          if (item.id === optionItem.id) {
                            return {
                              ...item,
                              isOpen: false,
                              cartCount: 0,
                            };
                          }
                          return item;
                        })
                      );
                    }
                    if (optionItem.cartCount > 0) {
                      setOptions((prevState) =>
                        prevState.map((item, i) => {
                          if (i === index) {
                            return {
                              ...item,
                              cartCount: item.cartCount - 1,
                            };
                          }
                          return item;
                        })
                      );
                    }
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <span>{optionItem.cartCount}</span>
                <IconButton
                  sx={{ width: "27px", height: "27px" }}
                  onClick={() => {
                    setOptions((prevState) =>
                      prevState.map((item, i) => {
                        if (i === index) {
                          return {
                            ...item,
                            cartCount: item.cartCount + 1,
                          };
                        }
                        return item;
                      })
                    );
                  }}
                >
                  <AddIcon />
                </IconButton>
              </div>
              <span style={{ color: "rgb(119, 124, 131)", fontSize: "19px" }}>
                Бесплатно
              </span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartCounter;
