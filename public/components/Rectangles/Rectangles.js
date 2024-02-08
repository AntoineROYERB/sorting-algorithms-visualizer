"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./Rectangles.css");
const generateRandomArray = ({ arraySize, maxValue = 100, }) => {
    let randomArray = [];
    let randomNumber;
    for (let i = 0; i < arraySize; i++) {
        randomNumber = Math.floor(Math.random() * (maxValue + 1));
        randomArray.push(randomNumber);
    }
    return randomArray;
};
const arrayToRectangles = (arr) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, arr.map((rectangleHeight, index) => (react_1.default.createElement("div", { key: index, className: "rectangle", style: { height: `${rectangleHeight}%` } })))));
};
const Rectangles = ({ arraySize, algorithm, }) => {
    const arrayToSort = generateRandomArray({ arraySize });
    let steps = [];
    switch (algorithm) {
        case "Bubble Sort":
            steps = bubbleSort(arrayToSort);
    }
    const rectangles = steps.map((step) => arrayToRectangles(step));
    return rectangles;
};
const RenderRectangles = ({ sliderValue, algorithm, isSorting }) => {
    const [stepIndex, setStepIndex] = (0, react_1.useState)(0);
    const [rectangles, setRectangles] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        let interval;
        if (isSorting) {
            const rects = Rectangles({ arraySize: sliderValue, algorithm });
            setRectangles(rects);
            interval = setInterval(() => {
                setStepIndex((prevStepIndex) => prevStepIndex < rects.length - 1 ? prevStepIndex + 1 : prevStepIndex);
            }, 30);
        }
        return () => clearInterval(interval);
    }, [isSorting, sliderValue, algorithm]);
    return (react_1.default.createElement("div", { className: "container" }, isSorting
        ? rectangles[stepIndex]
        : arrayToRectangles(generateRandomArray({ arraySize: sliderValue }))));
};
// Bubble Sort algorithm
function bubbleSort(arr) {
    const steps = [[...arr]];
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
exports.default = RenderRectangles;
