import React, { useEffect, useState } from "react";
import "./menuItemPage.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import MenuItemFilter from "../../components/menuItemFilter/menuItemFilter";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../../storage/atoms/main";
import { food } from "../../api/food";
import ItemsList from "../../components/itemsList/itemsList";

const MenuItemPage = () => {
  const params = useParams();
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [categoryFood, setCategoryFood] = useState(food[params.categoryName]);
  const [subcategoriesArray, setSubcategoriesArray] = useState([]);
  const [notFoundSearch, setNotFoundSearch] = useState(false);

  useEffect(() => {
    categoryFood.map((item) =>
      setSubcategoriesArray((prevState) => {
        if (item.subcategory) return ["Все", ...prevState, item.subcategory];
        else return [];
      })
    );
    setSubcategoriesArray((prevState) => {
      return prevState.filter((item, index) => {
        return prevState.indexOf(item) === index;
      });
    });
  }, []);

  const handleFilter = (subcat) => {
    if (subcat === "Все") {
      setCategoryFood(food[params.categoryName]);
    } else {
      setCategoryFood(() => {
        return food[params.categoryName].filter((item) => {
          return item.subcategory === subcat;
        });
      });
    }
  };

  const handleSearch = (e) => {
    if (e === "") {
      setCategoryFood(food[params.categoryName]);
      setNotFoundSearch(false);
    } else {
      setNotFoundSearch(false);
      const fitleredFood = categoryFood.filter((item) =>
        new RegExp(e, "i").test(item.title)
      );
      setCategoryFood(() => {
        if (fitleredFood.length > 0) return fitleredFood;
        else {
          setNotFoundSearch(true);
          return food[params.categoryName];
        }
      });
    }
  };

  console.log(cartItems);

  return (
    <div className="container">
      <Header />
      <div className="menuItemPage">
        <div className="menuItemPage-padding">
          <div className="menu-item-header">
            <div className="routes">
              <Link className="router-link" to="/menu">
                Меню
              </Link>
              <span style={{ color: "#777c83" }}>/</span>
              <Link className="router-link-current">{params.categoryName}</Link>
            </div>
            <div style={{ color: "#4f4f4f" }}>
              <span style={{ fontSize: "21px" }}>Доставка еды</span>
              <span
                style={{
                  fontSize: "25px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginLeft: "5px",
                }}
              >
                {localStorage.getItem("city")}
              </span>
            </div>
          </div>

          <div className="menu-item-filter">
            <MenuItemFilter
              handleFilter={handleFilter}
              handleSearch={handleSearch}
              subcategories={subcategoriesArray}
            />
          </div>

          <div className="menu-items-list">
            {notFoundSearch ? (
              <div>Ничего не найдено</div>
            ) : (
              <ItemsList items={categoryFood} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemPage;
