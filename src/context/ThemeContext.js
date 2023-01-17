import React, { createContext, useEffect, useState } from "react";

const themes = {
  dark: "bg-slate-800 text-slate-400 duration-1000",
  light: "bg-white text-black duration-1000",
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

//1. Create context
export const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  //Provider

  // useEffect(() => {
  //   const isDark = localStorage.getItem("dark") === "true";
  //   setDark(isDark);
  // }, [dark]);

  const theme = dark ? themes.dark : themes.light;

  const toggle = () => {
    // localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
