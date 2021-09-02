import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchAPI } from "../../services/fetchAPI";

import "./dashboard.scss";

import Boussole from "../../components/Boussole";
import Horloge from "../../components/Horloge";
import Background from "../../components/Background";

export default function Dashboard() {
  const { zipSlug } = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false)

  const date = new Date();
  const hour = date.getHours();
  let timeInformation = "";

  const fetch = async () => {
    try {
      const reponse = await fetchAPI(
        `https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&postal_code=${zipSlug}&country=FR&lang=fr`
      );
      setData(reponse.data[0]);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    fetch();

    const timer = setTimeout(() => {
      setLoad(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (hour === 22 ||
    hour === 23 ||
    hour === 0 ||
    hour === 1 ||
    hour === 2 ||
    hour === 3 ||
    hour === 4 ||
    hour === 5) {
    timeInformation = "night";
  };

  return (
    <>
      <div className="background">
        <Background
          temp={data.temp}
          clouds={data.clouds}
          sunDown={data.sunset}
          sunUp={data.sunrise}
        />
      </div>
      <div class={load ? "visible" : "notVisible"}>
        <div className="elements">
          <h1 className={`${timeInformation}`}>
            Bienvenue à {data.city_name}, il fait {data.temp}°C
          </h1>
          <Horloge timeInformation={timeInformation} />
        </div>
        <div className="centered">
          <Boussole>{data}</Boussole>
        </div>
      </div>
    </>
  );
}
