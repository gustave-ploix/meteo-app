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

  const fetch = async () => {
    try {
      const reponse = await fetchAPI(
        `https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&postal_code=${zipSlug}&country=FR&lang=fr`
      );
      setData(reponse.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="background">
        <Background temp={data.temp} clouds={data.clouds} sunDown={data.sunset} sunUp={data.sunrise} />
      </div>
      <div id="dashboardPage">
          <div className="elements">
            Dashboard for {data.city_name}
            <Horloge />
          </div>
        <div className="centered">
          <Boussole>{data}</Boussole>
        </div>
      </div>
    </>
  );
}
