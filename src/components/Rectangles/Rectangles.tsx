import React from "react";
import "./Rectangles.css";

const BubbleSort = (arr: Array<Number>) => {
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
      }
    }
  }
  return arr;
};

const generateRandomArray = ({ n, size = 100 }) => {
  let randomArray: Array<number> = [];
  let randomNumber: number;

  // // Initialisation du générateur pseudo-aléatoire
  // Math.seedrandom(seed);

  // Génération du tableau d'entiers aléatoires
  for (let i = 0; i < n; i++) {
    randomNumber = Math.floor(Math.random() * (size + 1));
    randomArray.push(randomNumber as never);
  }
  return randomArray;
};

const RepeatDiv = ({ numberOfTimes }) => {
  const ArrayToSort = generateRandomArray({ n: numberOfTimes });

  return (
    <>
      {ArrayToSort.map((rectangleHeight, index) => (
        <div
          key={index}
          className="rectangle"
          style={{ height: `${rectangleHeight}%` }}
        ></div>
      ))}
    </>
  );
};

export default function Rectangles({ sliderValue }) {
  return (
    <>
      <div className="container">
        <RepeatDiv numberOfTimes={sliderValue} />
      </div>
    </>
  );
}
