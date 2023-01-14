import React from "react";
import CityCard from "../components/CityCard";
import leftOne from "../static/left-1.png";

const Homepage = () => {
  return (
    <div className="container text-center">
      <div className="row-auto">
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
    </div>
  );
};

export default Homepage;
