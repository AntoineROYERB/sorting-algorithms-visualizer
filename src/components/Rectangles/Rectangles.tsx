import React, { useEffect, useState } from "react";
import "./Rectangles.css";

interface AlgorithmProps {
  arrayToSort: number[];
}

interface generateAlgorithmStepsProps extends AlgorithmProps {
  algorithm: string;
}

interface GenerateRandomArrayProps {
  arraySize: number;
  maxValue?: number;
}

interface RectanglesProps {
  sliderValue: number;
  algorithm: string;
  isSorting: boolean;
}

const generateRandomArray = ({
  arraySize,
  maxValue = 100,
}: GenerateRandomArrayProps): number[] => {
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

const Rectangles = ({
  sliderValue,
  algorithm,
  isSorting,
}: RectanglesProps): React.JSX.Element => {
  const arrayToSort = generateRandomArray({ arraySize: sliderValue });
  const [stepIndex, setStepIndex] = useState(0);
  const [rectangles, setRectangles] = useState<React.JSX.Element[]>([
    arrayToRectangles(arrayToSort),
  ]);

  // const onTimerTick() :void => void {
  //   setStepIndex((prevStepIndex : number) =>
  //   prevStepIndex < rectangles.length - 1
  //     ? prevStepIndex + 1
  //     : prevStepIndex
  // );
  // }

  useEffect(() => {
    const arrayToSort = generateRandomArray({ arraySize: sliderValue });
    const rectangles = generateAlgorithmSteps({
      algorithm,
      arrayToSort: arrayToSort,
    });
    setRectangles(rectangles);
  }, [sliderValue, algorithm]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    function onTimerTick() {
      setStepIndex((prevStepIndex) =>
        prevStepIndex < rectangles.length - 1
          ? prevStepIndex + 1
          : prevStepIndex
      );
    }

    if (isSorting) {
      // Start animation loop
      interval = setInterval(() => {
        onTimerTick();
      }, 30);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSorting]);

  return <div className="container">{rectangles[stepIndex]}</div>;
};

const generateAlgorithmSteps = ({
  algorithm,
  arrayToSort,
}: generateAlgorithmStepsProps): React.JSX.Element[] => {
  let steps: number[][] = [];

  switch (algorithm) {
    case "Bubble Sort":
      steps = bubbleSort({ arrayToSort });
  }

  switch (algorithm) {
    case "Insertion Sort":
      steps = insertionSort({ arrayToSort });
  }

  switch (algorithm) {
    case "Selection Sort":
      steps = selectionSort({ arrayToSort });
  }

  const rectangles = steps.map((step: number[]) => arrayToRectangles(step));
  return rectangles;
};

// Bubble Sort algorithm
function bubbleSort({ arrayToSort }: AlgorithmProps): number[][] {
  const steps: number[][] = [[...arrayToSort]];
  for (var i = 0; i < arrayToSort.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arrayToSort.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = temp;
        steps.push([...arrayToSort]);
      }
    }
  }
  return steps;
}

function selectionSort({ arrayToSort }: AlgorithmProps): number[][] {
  const steps: number[][] = [[...arrayToSort]];

  let arrayLength = arrayToSort.length;

  for (let i = 0; i < arrayLength; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (arrayToSort[j] < arrayToSort[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = arrayToSort[i];
      arrayToSort[i] = arrayToSort[min];
      arrayToSort[min] = tmp;
      steps.push([...arrayToSort]);
    }
  }
  return steps;
}

function insertionSort({ arrayToSort }: AlgorithmProps): number[][] {
  const steps: number[][] = [[...arrayToSort]];

  for (let i = 1; i < arrayToSort.length; i++) {
    let currentValue = arrayToSort[i];
    let j;
    for (j = i - 1; j >= 0 && arrayToSort[j] > currentValue; j--) {
      arrayToSort[j + 1] = arrayToSort[j];
      steps.push([...arrayToSort]);
    }
    arrayToSort[j + 1] = currentValue;
    steps.push([...arrayToSort]);
  }
  return steps;
}

export default Rectangles;
