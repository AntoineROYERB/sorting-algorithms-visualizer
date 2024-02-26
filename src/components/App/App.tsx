import React from "react";
import ResponsiveAppBar from "../Menu/Menu";
import Rectangles from "../Rectangles/Rectangles";

function App() {
  const [sliderValue, setSliderValue] = React.useState(30);
  const [algorithm, setAlgorithm] = React.useState("Bubble Sort");
  const [isSorting, setIsSorting] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  return (
    <>
      <ResponsiveAppBar
        algorithm={algorithm}
        sliderValue={sliderValue}
        onAlgorithmChange={(newAlgorithm: string) => setAlgorithm(newAlgorithm)}
        onSliderChange={(newValue: number) => setSliderValue(newValue)}
        onClickSort={() => setIsSorting(!isSorting)}
        isSorting={isSorting}
        onClickShuffle={() => setIsSorted(false)}
        isSorted={isSorted}
      />
      <Rectangles
        sliderValue={sliderValue}
        algorithm={algorithm}
        isSorting={isSorting}
        handleSort={() => setIsSorting(!isSorting)}
        handleIsSorted={() => setIsSorted(!isSorted)}
        isSorted={isSorted}
      />
    </>
  );
}

export default App;
