"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Menu_1 = __importDefault(require("../Menu/Menu"));
const Rectangles_1 = __importDefault(require("../Rectangles/Rectangles"));
function App() {
    const [sliderValue, setSliderValue] = react_1.default.useState(30);
    const [algorithm, setAlgorithm] = react_1.default.useState("Bubble Sort");
    const [isSorting, setIsSorting] = react_1.default.useState(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Menu_1.default, { algorithm: algorithm, sliderValue: sliderValue, onAlgorithmChange: (newAlgorithm) => setAlgorithm(newAlgorithm), onSliderChange: (newValue) => setSliderValue(newValue), onClickSort: () => setIsSorting(true) }),
        react_1.default.createElement(Rectangles_1.default, { sliderValue: sliderValue, algorithm: algorithm, isSorting: isSorting })));
}
exports.default = App;
