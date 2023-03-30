import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/button";
import ColorPicker from "./components/color-picker";

function App() {
  const [background, setBackground] = useState("#0da2ff");

  useEffect(()=>{
    document.body.style.background = background;
  }, [background])
  console.log(background);

  const changeBackground = () => {
    const hexString = "0123456789abcdef";
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      let char = hexString[Math.ceil(Math.random() * hexString.length)];

      hexCode += char === undefined ? "0" : char;
    }
    setBackground(hexCode);
  };
  return (
    <div className="App">
      <ColorPicker background={background}>
        <h1 className="color">{background}</h1>
        <Button onclick={changeBackground}>
          Change Background
        </Button>
      </ColorPicker>
    </div>
  );
}

export default App;
