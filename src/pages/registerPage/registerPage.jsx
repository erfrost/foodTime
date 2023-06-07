import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./registerPage.css";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validate = () => {
    if (
      login.split("").length > 5 &&
      password.split("").length > 5 &&
      password !== "" &&
      repeatPassword !== "" &&
      password === repeatPassword
    )
      return true;
    else return false;
  };

  return (
    <div className="login-container">
      <div className="login-box" style={{ gap: "5px" }}>
        <div className="form-text">Register</div>
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
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          className="text-field-login"
        >
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            pattern="^\S*$"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
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
            placeholder="Repeat password"
          />
        </FormControl>
        <span
          className="already-account-text"
          style={{ flexDirection: "row", marginBottom: "5px" }}
        >
          You have an account?
          <Link className="form-link" style={{ marginLeft: "5px" }} to="/login">
            Login
          </Link>
        </span>
        <Link
          className={
            validate() ? "submit-btn" : "submit-btn submit-btn-disabled"
          }
          to={validate() ? "/login" : "#"}
        >
          <PlayArrowIcon className="submit-icon" />
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
