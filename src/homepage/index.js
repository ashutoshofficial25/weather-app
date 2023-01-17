import React from "react";
import CityCard from "../components/CityCard";
import WeatherCard from "../components/WeatherCard";
import leftOne from "../static/left-1.png";

const Homepage = () => {
  return (
    <div className="container pt-5 m-auto text-center">
      <div className="row-auto w-full justify-between flex">
        <div className="left w-96">
          <img src={leftOne} alt="left-1" />
        </div>
        <div className="center">
          <CityCard />
        </div>
        <div className="right w-96">
          <img src={leftOne} alt="left-1" />
        </div>
      </div>
      <div className="row-auto w-full justify-between flex">
        <div className="left w-96">
          <img src={leftOne} alt="left-1" />
        </div>
        <div className="flex mt-10 gap-5 flex-wrap">
          <div>
            <WeatherCard />
            <WeatherCard />
          </div>
          <div>
            <WeatherCard />
            <WeatherCard />
          </div>
        </div>
        <div className="right w-96">
          <img src={leftOne} alt="left-1" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
