import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Menu/Menu.tsx";
import Rectangles from "../Rectangles/Rectangles.tsx";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Rectangles />
    </>
  );
}

export default App;
