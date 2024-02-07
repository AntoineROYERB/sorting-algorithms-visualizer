import React, { useEffect, useState } from "react";
import "./Rectangles.css";

const generateRandomArray = (
  arraySize: number,
  maxValue: number = 100
): number[] => {
  let randomArray: number[] = [];
  let randomNumber: number;
  for (let i = 0; i < arraySize; i++) {
    randomNumber = Math.floor(Math.random() * (maxValue + 1));
    randomArray.push(randomNumber);
  }
  return randomArray;
};

const arrayToRectangles = (arr: number[]): React.JSX.Element => {
  return (
    <>
      {arr.map((rectangleHeight, index) => (
        <div
          key={index}
          className="rectangle"
          style={{ height: `${rectangleHeight}%` }}
        ></div>
      ))}
    </>
  );
};

const Rectangles = (
  numRectangles: number,
  algorithm: string
): React.JSX.Element[] => {
  const arrayToSort = generateRandomArray(numRectangles);
  let steps: number[][] = [];

  switch (algorithm) {
    case "Bubble Sort":
      steps = bubbleSort(arrayToSort);
  }

  const rectangles = steps.map((step: number[]) => arrayToRectangles(step));
  return rectangles;
};

const RenderRectangles: React.FC<{
  sliderValue: number;
  algorithm: string;
  isSorting: boolean;
}> = ({ sliderValue, algorithm, isSorting }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [rectangles, setRectangles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSorting) {
      const rects = Rectangles(sliderValue, algorithm);
      setRectangles(rects);

      interval = setInterval(() => {
        setStepIndex((prevStepIndex) =>
          prevStepIndex < rects.length - 1 ? prevStepIndex + 1 : prevStepIndex
        );
      }, 30);
    }

    return () => clearInterval(interval);
  }, [isSorting, sliderValue, algorithm]);

  return (
    <div className="container">
      {isSorting
        ? rectangles[stepIndex]
        : arrayToRectangles(generateRandomArray(sliderValue))}
    </div>
  );
};
// Bubble Sort algorithm
function bubbleSort(arr: number[]): number[][] {
  const steps: number[][] = [[...arr]];
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        steps.push([...arr]);
      }
    }
  }
  return steps;
}

export default RenderRectangles;
