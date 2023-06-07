import React, { useEffect, useState } from "react";
import "./menuPage.css";
import Header from "../../components/header/header";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { food } from "../../api/food";
import { useRecoilState } from "recoil";
import { searchItemsState } from "../../storage/atoms/main";
import { useMediaQuery } from "react-responsive";
import ItemsList from "../../components/itemsList/itemsList";

const categories = Object.keys(food);
const foodTransform = [].concat(...Object.values(food));

const MenuPage = () => {
  const [input, setInput] = useState("");
  const [notFoundSearch, setNotFoundSearch] = useState(false);
  const [items, setItems] = useRecoilState(searchItemsState);
  const mobilleDevice = useMediaQuery({ maxWidth: "650px" });

  const handleSearch = (e) => {
    if (e === "") {
      setItems(foodTransform);
      setNotFoundSearch(false);
    } else {
      setNotFoundSearch(false);
      const fitleredFood = []
        .concat(...Object.values(food))
        .filter((item) => new RegExp(e, "i").test(item.title));
      setItems(() => {
        if (fitleredFood.length > 0) return fitleredFood;
        else {
          setNotFoundSearch(true);
          return foodTransform;
        }
      });
    }
  };

  useEffect(() => {
    handleSearch(input);
  }, [input]);

  return (
    <div className="container">
      <Header />
      <div className="menu-main">
        <div className="menu-padding">
          <TextField
            className="text-field text-field-search"
            placeholder="Введите название блюда"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setInput("")}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {mobilleDevice ? (
            <div className="mobile-categories">
              {notFoundSearch ? (
                "Ничего не найдено"
              ) : items.length > 0 && input.length > 0 ? (
                <div className="filtered-items">
                  {items.map((item) => (
                    <Link to={`/itemInfo/${item.id}`} key={item.id}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : (
                categories.map((cat, index) => (
                  <Link
                    className="mobile-category-item"
                    to={`/menu/${cat}`}
                    key={index}
                  >
                    <div className="mobile-category-item-text">{cat}</div>
                  </Link>
                ))
              )}
            </div>
          ) : (
            <div className="categories">
              {notFoundSearch ? (
                "Ничего не найдено"
              ) : items.length > 0 && input.length > 0 ? (
                <div className="menu-items-list">
                  <ItemsList items={items} />
                  {/* {items.map((item) => (
              
                    // <Link to={`/itemInfo/${item.id}`} key={item.id}>
                    //   {item.title}
                    // </Link>
                  ))} */}
                </div>
              ) : (
                categories.map((cat, index) => (
                  <Link
                    className="category-item"
                    to={`/menu/${cat}`}
                    key={index}
                  >
                    <div className="category-item-text">{cat}</div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
