import React from "react";

const WeatherCard = ({ title = "", value = "" }) => {
  return (
    <div className="border px-10 my-2  py-2 border-gray-500 w-fit rounded-xl shadow-xl">
      <div>{title}</div>

      <div>{value}</div>
    </div>
  );
};

export default WeatherCard;
