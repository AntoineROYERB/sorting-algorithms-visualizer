import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Menu/Menu";
import Rectangles from "../Rectangles/Rectangles";

function App() {
  const [sliderValue, setSliderValue] = React.useState(30);
  const [algorithm, setAlgorithm] = React.useState("Bubble Sort");
  const [isSorting, setIsSorting] = React.useState(false);
  return (
    <>
      <ResponsiveAppBar
        algorithm={algorithm}
        sliderValue={sliderValue}
        onAlgorithmChange={(newAlgorithm: string) => setAlgorithm(newAlgorithm)}
        onSliderChange={(newValue: number) => setSliderValue(newValue)}
        onClickSort={() => setIsSorting(true)}
      />
      <Rectangles
        sliderValue={sliderValue}
        algorithm={algorithm}
        isSorting={isSorting}
        onClickSort={setIsSorting}
      />
    </>
  );
}

export default App;
