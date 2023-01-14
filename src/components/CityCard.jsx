import React, { useState } from "react";
import cityImage from "../static/city.png";

const CityCard = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="card flex flex-col border w-fit m-auto border-gray-700 p-5  mt-5 rounded shadow-5 gap-4">
      <div className="m-auto">
        <img src={cityImage} alt="city-image" className="h-20 w-auto" />
      </div>
      <div>
        <input
          className="input border border-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button type="sumbit">SUBMIT</button>
      </div>
    </div>
  );
};

export default CityCard;
