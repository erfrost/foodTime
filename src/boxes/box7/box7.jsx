import React, { useEffect, useRef } from "react";
import "./box7.css";
import { useRecoilValue } from "recoil";
import { coordinatesState } from "../../storage/atoms/main";
import { Clusterer, Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const adress = [
  {
    id: 1,
    address: "ул. Братьев Кашириных, 124",
    coordinates: [55.174173, 61.304509],
  },
  {
    id: 2,
    address: "Комсомольский просп., 33",
    coordinates: [55.194215, 61.350551],
  },
  {
    id: 3,
    address: "Свердловский просп., 88",
    coordinates: [55.152029, 61.389047],
  },
  {
    id: 4,
    address: "Салютная ул., 10",
    coordinates: [55.172737, 61.452921],
  },
];

const Box7 = () => {
  const coordinates = useRecoilValue(coordinatesState);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && coordinates) {
      mapRef.current.setCenter(coordinates);
    }
  }, [coordinates]);

  return (
    <div className="box-6-main">
      <div className="box-7-content">
        <YMaps>
          <Map
            defaultState={{
              center: [55.159901, 61.402547],
              zoom: 11,
            }}
            instanceRef={mapRef}
            height="450px"
            className="Map"
          >
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {adress.map((item) => (
                <Placemark
                  options={{
                    iconColor: "#396C03",
                  }}
                  key={item.id}
                  geometry={item.coordinates}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
        <div className="box-7-text">Мы в вашем городе</div>
      </div>
    </div>
  );
};

export default Box7;
