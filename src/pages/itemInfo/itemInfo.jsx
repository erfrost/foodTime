import React, { useState } from "react";
import "./itemInfo.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { food } from "../../api/food";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../../storage/atoms/main";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EastIcon from "@mui/icons-material/East";

const ItemInfo = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const foodTransform = [].concat(...Object.values(food));
  const foodId = Number(useParams().itemId);
  console.log(cartItems);
  console.log(foodId);
  const [isOpen, setIsOpen] = useState(
    cartItems.some((item) => item.id === foodId)
  );
  const item = foodTransform.find((el) => el.id === foodId);
  const cartIndex = cartItems.findIndex((el) => el.id === item.id);

  return (
    <div className="container">
      <Header />
      <div className="itemInfo-main">
        <div className="itemInfo-padding">
          <div className="searchItem">
            <div className="searchItem-padding">
              <div className="searchItem-content">
                <div className="searchItem-content-top">
                  <div className="searchItem-image"></div>
                  <div className="searchItem-info">
                    <div
                      className="searchItem-info-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Link
                        className="category-link"
                        to={`/menu/${item.category}`}
                      >
                        {item.category}
                      </Link>
                      <EastIcon />
                    </div>
                    <div className="searchItem-info-title">{item.title}</div>
                    <div className="searchItem-info-title">{item.weight}</div>
                    <div className="searchItem-info-title">
                      {item.count + " шт."}
                    </div>
                  </div>
                </div>
                <div className="searchItem-content-bottom">
                  <div className="searchItem-counter">
                    {!isOpen ? (
                      <div
                        className="counter"
                        onClick={() => {
                          setIsOpen(true);
                          setCartItems((prevState) => [
                            ...prevState,
                            { ...item, cartCount: 1, isOpen: true },
                          ]);
                        }}
                      >
                        В корзину
                      </div>
                    ) : (
                      <div className="active-counter">
                        <IconButton
                          onClick={() => {
                            setCartItems((prevState) => {
                              if (prevState[cartIndex].cartCount === 1) {
                                setIsOpen(false);
                                return prevState.filter(
                                  (el) => el.id !== item.id
                                );
                              } else {
                                return prevState.map((el) => {
                                  if (el.id === item.id) {
                                    return {
                                      ...el,
                                      cartCount: el.cartCount - 1,
                                    };
                                  } else return el;
                                });
                              }
                            });
                          }}
                        >
                          <RemoveIcon sx={{ color: "white" }} />
                        </IconButton>
                        <div className="counter-number">
                          {cartItems[cartIndex]?.cartCount}
                        </div>
                        <IconButton
                          onClick={() =>
                            setCartItems((prevState) => {
                              return prevState.map((el) => {
                                if (el.id === item.id) {
                                  console.log({
                                    ...el,
                                    cartCount: el.cartCount + 1,
                                  });
                                  return { ...el, cartCount: el.cartCount + 1 };
                                } else return el;
                              });
                            })
                          }
                        >
                          <AddIcon sx={{ color: "white" }} />
                        </IconButton>
                      </div>
                    )}
                    <div className="price">
                      {cartItems[cartIndex]?.cartCount
                        ? cartItems[cartIndex]?.cartCount *
                            cartItems[cartIndex]?.price +
                          " ₽"
                        : item.price + " ₽"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
