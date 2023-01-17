import React, { createContext, useState } from "react";

const themes = {
  dark: "bg-black text-white",
  light: "bg-white text-black",
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

  const theme = dark ? themes.dark : themes.light;

  const toggle = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
