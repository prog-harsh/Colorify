import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  let hexCodes = [];

  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return "#" + r + g + b;
  }

  const generateHexCodes = () => {
    hexCodes = [];
    for (let index = 0; index < 63; index++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const hex = RGBToHex(r, g, b);
      hexCodes.push(hex);
    }
  };
  generateHexCodes();

  const [hexColors, setHexCodes] = useState(hexCodes);

  const refresh = () => {
    generateHexCodes();
    setHexCodes((prev) => {
      return hexCodes;
    });
  };

  return (
    <div>
      <Header onRefresh={refresh}/>
      
      <MainContent hexCodes={hexColors} />
      <footer>
        <p> &#169; 2022 Colorify - Made with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
