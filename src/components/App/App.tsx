import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Menu/Menu.tsx";
import Rectangles from "../Rectangles/Rectangles.tsx";

function App() {
  const [sliderValue, setSliderValue] = React.useState(30);
  const [algorithm, setAlgorithm] = React.useState("");

  return (
    <>
      <ResponsiveAppBar
        sliderValue={sliderValue}
        onSliderChange={(newValue) => {
          setSliderValue(newValue);
        }}
        algorithm={algorithm}
        onAlgorithmChange={(newAlgorithm) => setAlgorithm(newAlgorithm)}
      />
      <Rectangles sliderValue={sliderValue} algorithm={algorithm} />
    </>
  );
}

export default App;
