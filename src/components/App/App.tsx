import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Menu/Menu.tsx";
import Rectangles from "../Rectangles/Rectangles.tsx";

function App() {
  const [sliderValue, setSliderValue] = React.useState(30);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
  };
  return (
    <>
      <ResponsiveAppBar onSliderChange={handleSliderChange} />
      <Rectangles sliderValue={sliderValue} />
    </>
  );
}

export default App;
