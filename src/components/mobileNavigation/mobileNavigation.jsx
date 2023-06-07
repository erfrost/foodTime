import React, { useState } from "react";
import "./mobileNavigation.css";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon sx={{ width: 37, height: 37, color: "#396C03" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          <Link className="mobile-menu-link" to="/login">
            Войти
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" />
          </ListItemIcon>
          <Link className="mobile-menu-link" to="/cart">
            Корзина
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RestaurantMenuIcon fontSize="small" />
          </ListItemIcon>
          <Link className="mobile-menu-link" to="/menu">
            Меню
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          <Link className="mobile-menu-link" to="/">
            О нас
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileNavigation;
