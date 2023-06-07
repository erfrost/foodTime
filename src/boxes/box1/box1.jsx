import React, { useEffect, useState } from "react";
import svg from "../../assets/box1-image.svg";
import inputIcon from "../../assets/input-icon.svg";
import "./box1.css";
import { InputAdornment, TextField } from "@mui/material";
import { cities } from "../../api/citys";
import { useRecoilState } from "recoil";
import { coordinatesState } from "../../storage/atoms/main";

const Box1 = () => {
  const [input, setInput] = useState("");
  const [visibleCities, setVisibleCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [, setCoordinates] = useRecoilState(coordinatesState);

  useEffect(() => {
    const filteredCities = cities
      .filter((city) => new RegExp(input, "i").test(city.name))
      .sort((a, b) => a.name.localeCompare(b.name));
    setVisibleCities(filteredCities);
  }, [input]);

  const onSelectedCity = (city) => {
    setInput(city);
    setVisibleCities([]);
    setSelectedCity(city);
    localStorage.setItem("city", city);
  };
  const locationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoordinates([latitude, longitude]);
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bc485a90ccdc400ead890f340aae40bf`
            );
            const data = await response.json();
            const dataArray = data.results[0].formatted.split(",");
            const cityFromArray = dataArray[dataArray.length - 4].replace(
              /\s/g,
              ""
            );
            localStorage.setItem("city", cityFromArray);
            setSelectedCity(cityFromArray);
            setInput(cityFromArray);
          } catch (error) {
            console.log(error);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="box-1-main">
      <div className="box-1-content">
        <div className="label-box">
          <div className="label-text-1">
            Заказывайте еду онлайн в ваших любимых местных ресторанах
            <span style={{ color: "#FF8B00" }}>.</span>
          </div>
          <div className="label-text-2">
            Свежеприготовленная еда доставляется прямо к вашей двери.
          </div>
          <div className="cities-box">
            <TextField
              className="text-field"
              placeholder="Введите ваш город"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              value={input}
              onChange={(e) => {
                setInput((prevState) => {
                  if (
                    prevState.length > e.target.value ||
                    e.target.value === ""
                  ) {
                    setSelectedCity("");
                    return e.target.value;
                  } else {
                    return e.target.value;
                  }
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ cursor: "pointer" }}
                    onClick={locationRequest}
                  >
                    <div className="input-icon">
                      <img src={inputIcon} alt="inputIcon" />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
            {visibleCities.length > 0 &&
            input.length > 1 &&
            selectedCity === "" ? (
              <div className="visibleCities">
                <div className="cities-padding">
                  {visibleCities.map((city, index) => (
                    <div
                      className="city-item"
                      key={index}
                      onClick={() => onSelectedCity(city.name)}
                    >
                      {city.name}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <img className="box-1-image" src={svg} alt="svg" />
      </div>
    </div>
  );
};

export default Box1;
