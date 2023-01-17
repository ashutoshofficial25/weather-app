import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import cityImage from "../static/city.png";
import lightIcon from "../static/light-icon.png";
import darkIcon from "../static/dark-logo.png";

const CityCard = ({ location = "", setLocation, condition }) => {
  const { toggle, dark } = useContext(ThemeContext);
  const [search, setSearch] = useState(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) setLocation(search);
  };

  return (
    <div className="card flex flex-col border w-fit m-auto border-gray-700 max-[720px]:p-5 max-[720px]:mx-2 p-12 rounded-xl  shadow-xl gap-4">
      <div onClick={toggle} className="w-5">
        {dark ? (
          <img src={lightIcon} alt="light-icon" />
        ) : (
          <img src={darkIcon} alt="dark-icon" />
        )}
      </div>
      <div className="m-auto">
        <img src={cityImage} alt="city-image" className="w-1/3 m-auto" />
      </div>
      <div>
        <input
          className="input max-[720px]:p-1  border border-gray-500 px-5 mt-3 py-2 text-slate-500 max-[720px]:font-semibold  font-bold rounded-md bg-slate-100 outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <button
          type="sumbit"
          className="border rounded-md border-gray-500 max-[720px]:px-3 max-[720px]:text-sm px-7 py-2 hover:bg-gray-700 hover:text-white duration-500"
          onClick={(e) => handleSubmit(e)}
        >
          SUBMIT
        </button>
      </div>
      {condition && (
        <div className="flex items-center justify-center">
          <img className="w-10" src={condition.icon} alt="weather" />
          <span className="text">{condition?.text}</span>
        </div>
      )}
    </div>
  );
};

export default CityCard;
