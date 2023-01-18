import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Homepage from "./homepage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme} min-[600px]:pb-28`}>
      <Homepage />
    </div>
  );
}

export default App;
