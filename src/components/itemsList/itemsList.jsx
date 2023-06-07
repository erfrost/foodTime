import React from "react";
import "./itemsList.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { cartItemsState } from "../../storage/atoms/main";
import { useRecoilState } from "recoil";

const ItemsList = ({ items }) => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  return items?.map((item, index) => (
    <div className="menu-items-product" key={item.id}>
      <Link to={`/itemInfo/${item.id}`} className="product-image"></Link>
      <div className="product-description">
        <div className="product-description-1" style={{ color: "#777c83" }}>
          <Link
            to={`/itemInfo/${item.id}`}
            className="link-toMoreInfo"
            style={{
              maxWidth: "65%",
              textDecoration: "none",
            }}
          >
            {item.title}
          </Link>
          <div>
            {item.weight} {item.count ? "/ " + item.count : null}
          </div>
        </div>
        <div className="product-description-2">
          <div style={{ color: "rgb(119, 124, 131)" }}>{item.price + " ₽"}</div>
          {!cartItems[cartItems.findIndex((el) => el.id === items[index].id)]
            ?.isOpen ? (
            <div
              className="inCart"
              onClick={() =>
                setCartItems((prevState) => {
                  const cartItemsIndex = prevState.findIndex(
                    (el) => el.id === items[index].id
                  );
                  if (cartItemsIndex === -1) {
                    return [
                      ...prevState,
                      {
                        ...items[index],
                        cartCount: 1,
                        isOpen: true,
                      },
                    ];
                  }
                })
              }
            >
              <span>В корзину</span>
            </div>
          ) : (
            <div className="inCart count">
              <IconButton
                sx={{ width: "27px", height: "27px" }}
                onClick={() => {
                  if (cartItems[index].cartCount === 1) {
                    setCartItems((prevState) =>
                      prevState.filter((el) => el.id !== cartItems[index].id)
                    );
                  }
                  if (cartItems[index].cartCount > 1) {
                    setCartItems((prevState) => {
                      const copyArray = [...prevState];
                      const cartItemsIndex = prevState.findIndex(
                        (el) => el.id === items[index].id
                      );
                      copyArray[cartItemsIndex] = {
                        ...copyArray[cartItemsIndex],
                        cartCount: copyArray[cartItemsIndex].cartCount - 1,
                      };
                      return [...copyArray];
                    });
                  }
                }}
              >
                <RemoveIcon />
              </IconButton>
              <span>
                {
                  cartItems[
                    cartItems.findIndex((i) => i.id === items[index].id)
                  ].cartCount
                }
              </span>
              <IconButton
                sx={{ width: "27px", height: "27px" }}
                onClick={() =>
                  setCartItems((prevState) => {
                    const copyArray = [...prevState];
                    const cartItemsIndex = prevState.findIndex(
                      (el) => el.id === items[index].id
                    );
                    copyArray[cartItemsIndex] = {
                      ...copyArray[cartItemsIndex],
                      cartCount: copyArray[cartItemsIndex].cartCount + 1,
                    };
                    return [...copyArray];
                  })
                }
              >
                <AddIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  ));
};

export default ItemsList;
