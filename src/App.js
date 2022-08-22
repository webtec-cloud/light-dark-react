import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import "./App.css";
import Form from "./components/Form";

export const themecontext = createContext(null);

function App() {
  const [theme, settheme] = useState("dark");
  const toggletheme = () => {
    settheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <themecontext.Provider>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === "light" ? "light theme" : "dark theme"}</label>
          <ReactSwitch onChange={toggletheme} checked={theme === "dark"} />
        </div>
      </div>
    </themecontext.Provider>
  );
}

export default App;
