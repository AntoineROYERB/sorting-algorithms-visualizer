import React, { useEffect, useRef, useState } from "react";
import "./Rectangles.css";

interface AlgorithmProps {
  arrayToSort: number[];
}

interface generateAlgorithmStepsProps extends AlgorithmProps {
  algorithm: string;
}

interface GenerateRandomArrayProps {
  arraySize: number;
  minValue?: number;
  maxValue?: number;
}

interface RectanglesProps {
  sliderValue: number;
  algorithm: string;
  isSorting: boolean;
  handleSort: () => void;
}

const generateRandomArray = ({
  arraySize,
  minValue = 1,
  maxValue = 100,
}: GenerateRandomArrayProps): number[] => {
  let randomArray: number[] = [];
  let randomNumber: number;
  for (let i = 0; i < arraySize; i++) {
    randomNumber =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    randomArray.push(randomNumber);
  }
  return randomArray;
};

const arrayToRectangles = (
  arr: number[],
  booleanArray?: boolean[],
  arraySorted?: number[]
): React.JSX.Element => {
  if (!booleanArray) {
    booleanArray = Array(arr.length).fill(false);
  }
  if (!arraySorted) {
    arraySorted = Array(arr.length).fill(-1);
  }
  return (
    <>
      {arr.map((rectangleHeight, index) => {
        let heightHasChange = booleanArray![index];
        let isAtGoodPosition = rectangleHeight == arraySorted![index];
        let rectangleClass = "rectangle";
        if (heightHasChange) {
          rectangleClass += " yellow";
        }
        if (isAtGoodPosition) {
          rectangleClass += " green";
        }
        return (
          <div
            key={index}
            className={rectangleClass}
            style={{
              height: `${rectangleHeight + 1}%`,
            }}
          >
            {arr.length < 40 ? (
              <div
                style={{
                  fontSize: `${80}%`,
                }}
              >
                {rectangleHeight}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

const Rectangles = ({
  sliderValue,
  algorithm,
  isSorting,
  handleSort,
}: RectanglesProps): React.JSX.Element => {
  const arrayToSort = generateRandomArray({ arraySize: sliderValue });
  const [stepIndex, setStepIndex] = useState(0);
  const [rectangles, setRectangles] = useState<React.JSX.Element[]>([
    arrayToRectangles(arrayToSort),
  ]);

  const stepIndexRef = useRef(stepIndex);

  useEffect(() => {
    stepIndexRef.current = stepIndex;
  }, [stepIndex]);

  useEffect(() => {
    const arrayToSort = generateRandomArray({ arraySize: sliderValue });
    const rectangles = generateAlgorithmSteps({
      algorithm,
      arrayToSort: arrayToSort,
    });
    setRectangles(rectangles);
    setStepIndex(0);
    if (isSorting) {
      handleSort();
    }
  }, [sliderValue, algorithm]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    function onTimerTick() {
      const currentStepIndex = stepIndexRef.current;
      // If stepIndex reaches the last step, stop sorting
      if (currentStepIndex === rectangles.length - 1) {
        handleSort();
      } else {
        setStepIndex((prevStepIndex) =>
          prevStepIndex < rectangles.length - 1
            ? prevStepIndex + 1
            : prevStepIndex
        );
      }
    }

    if (isSorting && stepIndexRef.current < rectangles.length - 1) {
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

  const detectPositionChanges = (steps: number[][]): boolean[][] =>
    steps.map((step, index) => {
      if (index === 0) {
        return step.map(() => false);
      }
      const previousStep = steps[index - 1];
      return step.map((value, i) => value !== previousStep[i]);
    });

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

  const positionChanges = detectPositionChanges(steps);
  const arraySorted = steps[steps.length - 1];

  const rectangles = steps.map((step: number[], index: number) =>
    arrayToRectangles(step, positionChanges[index], arraySorted)
  );
  return rectangles;
};

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
