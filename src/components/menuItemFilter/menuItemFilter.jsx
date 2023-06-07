import React, { useEffect, useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./menuItemFitler.css";
import { Link } from "react-router-dom";

const MenuItemFilter = ({ handleFilter, handleSearch, subcategories }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    handleSearch(input);
  }, [input]);

  return (
    <>
      {subcategories.length > 0 ? (
        <div className="subCategories-filter">
          {subcategories.map((subcat, index) => (
            <Link
              className="subcat-link"
              key={index}
              onClick={() => handleFilter(subcat)}
            >
              {subcat}
            </Link>
          ))}
        </div>
      ) : null}

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
    </>
  );
};

export default MenuItemFilter;
