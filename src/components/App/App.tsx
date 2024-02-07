import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Menu/Menu.tsx";
import RenderRectangles from "../Rectangles/Rectangles.tsx";

function App() {
  const [sliderValue, setSliderValue] = React.useState(30);
  const [algorithm, setAlgorithm] = React.useState("Bubble Sort");
  const [isSorting, setIsSorting] = React.useState(false);
  return (
    <>
      <ResponsiveAppBar
        sliderValue={sliderValue}
        onSliderChange={(newValue) => {
          setSliderValue(newValue);
        }}
        algorithm={algorithm}
        onAlgorithmChange={(newAlgorithm) => setAlgorithm(newAlgorithm)}
        onClickSort={() => setIsSorting(true)}
      />
      <RenderRectangles
        sliderValue={sliderValue}
        algorithm={algorithm}
        isSorting={isSorting}
      />
    </>
  );
}

export default App;
