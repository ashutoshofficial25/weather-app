import axios from "axios";
import React, { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import WeatherCard from "../components/WeatherCard";
import leftOne from "../static/left-1.png";

const Homepage = () => {
  const [location, setLocation] = useState("Lucknow");
  const [weatherData, setWeatherData] = useState({});

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${location}` },
    headers: {
      "X-RapidAPI-Key": "9b7c3b534fmshd76ce0fbadc22bep10266bjsn79dc71d2a351",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fetchWeather = async () => {
    const { data } = await axios.request(options);

    if (data) {
      setWeatherData(data);
    }
    console.log("log:", data);
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  useEffect(() => {
    console.log("log:", location);
  }, [location]);

  return (
    <div className="container pt-5 m-auto text-center">
      <div className="row-auto w-full justify-between flex">
        <div className="left w-96 max-[720px]:hidden">
          <img src={leftOne} alt="left-1" />
        </div>
        <div className="center ">
          <CityCard
            location={location}
            setLocation={setLocation}
            condition={
              weatherData
                ? weatherData?.current?.condition
                : { icon: "", text: "" }
            }
          />
        </div>
        <div className="right w-96 max-[720px]:hidden">
          <img src={leftOne} alt="left-1" />
        </div>
      </div>
      <div className="flex mt-2 justify-center flex-wrap">
        <div className="flex flex-col items-center">
          <WeatherCard
            title="City Name"
            value={weatherData ? weatherData?.location?.name : ""}
          />
          <WeatherCard
            title="Temperature"
            value={weatherData ? weatherData?.current?.temp_c : ""}
          />
        </div>
        <div>
          <WeatherCard
            title="Humidity"
            value={weatherData ? weatherData?.current?.humidity : ""}
          />
          <WeatherCard
            title="Feels like"
            value={weatherData ? weatherData?.current?.feelslike_c : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
