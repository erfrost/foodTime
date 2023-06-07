import React, { useState } from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <KeyboardBackspaceIcon
        className="back-icon"
        fontSize="large"
        onClick={() => window.history.go(-1)}
      />
      <div className="login-box">
        <div className="form-text">Login</div>
        <TextField
          className="text-field-login"
          placeholder="Login"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          className="text-field-login"
        >
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Password"
          />
        </FormControl>
        <div className="already-account-box">
          <FormControlLabel
            control={
              <Checkbox
                className="check-box"
                onChange={() => setRememberMe(!rememberMe)}
                defaultChecked={false}
                color="success"
              />
            }
            label="Remember me"
            className="form-control-label"
          />
          <Link className="form-link" to="/register">
            Register
          </Link>
        </div>
        <Link
          className={
            login !== "" && password !== ""
              ? "submit-btn"
              : "submit-btn submit-btn-disabled"
          }
          to="/"
        >
          <PlayArrowIcon className="submit-icon" />
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
