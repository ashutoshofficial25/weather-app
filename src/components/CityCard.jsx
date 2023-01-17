import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import cityImage from "../static/city.png";

const CityCard = ({ setLocation }) => {
  const { toggle, dark } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) setLocation(search);
  };

  return (
    <div className="card flex flex-col border w-fit m-auto border-gray-700 p-12 rounded-xl  shadow-xl gap-4">
      <div className="relative flex flex-col items-center justify-center  overflow-hidden">
        <div className="flex">
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer "
              checked={enabled}
              readOnly
              onClick={toggle}
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-500"
            ></div>
          </label>
        </div>
      </div>
      <div className="m-auto">
        <img src={cityImage} alt="city-image" className="w-1/3 m-auto" />
      </div>
      <div>
        <input
          className="input border border-gray-500 px-5 my-3 py-2 text-green-500 font-bold rounded-md bg-slate-100 outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button
          type="sumbit"
          className="border rounded-md border-gray-500 px-7 py-2 hover:bg-gray-700 hover:text-white duration-500"
          onClick={(e) => handleSubmit(e)}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default CityCard;
