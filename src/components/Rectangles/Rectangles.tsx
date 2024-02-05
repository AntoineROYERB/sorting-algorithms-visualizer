import React from "react";
import "./Rectangles.css";

const RepeatDiv = ({ numberOfTimes }) => (
  <>
    {Array.from({ length: numberOfTimes }).map((_, index) => (
      <div key={index} className="rectangle"></div>
    ))}
  </>
);

export default function Rectangles({ sliderValue }) {
  return (
    <>
      <div className="container">
        <RepeatDiv numberOfTimes={sliderValue} />
      </div>
    </>
  );
}
