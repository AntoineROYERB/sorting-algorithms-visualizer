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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const Slider_1 = __importDefault(require("@mui/material/Slider"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
function SelectAlgorithm({ algorithm, onAlgorithmChange, }) {
    const algorithms = ["Bubble Sort", "Quick Sort"];
    return (React.createElement("div", null,
        React.createElement(FormControl_1.default, { sx: { m: 1, minWidth: 120 } },
            React.createElement(InputLabel_1.default, { id: "demo-simple-select-helper-label" }, "Algorithm"),
            React.createElement(Select_1.default, { labelId: "demo-simple-select-helper-label", id: "demo-simple-select-helper", value: typeof algorithm === "string" ? algorithm : "", label: "Algorithm", onChange: (event) => onAlgorithmChange(event.target.value) }, algorithms.map((algorithm) => {
                return (React.createElement(MenuItem_1.default, { key: algorithm, value: algorithm }, algorithm));
            })))));
}
function InputSlider({ sliderValue, onSliderChange }) {
    return (React.createElement(Box_1.default, { sx: { width: 250 } },
        React.createElement(Typography_1.default, { id: "input-slider", gutterBottom: true }, "Number of rectangles & speed"),
        React.createElement(Slider_1.default, { value: typeof sliderValue === "number" ? sliderValue : 0, onChange: (_event, newValue) => onSliderChange(newValue), "aria-labelledby": "input-slider" })));
}
function ResponsiveAppBar({ algorithm, sliderValue, onAlgorithmChange, onSliderChange, onClickSort, }) {
    return (React.createElement(AppBar_1.default, { style: {
            background: "#2E3B55",
            display: "flex",
        }, position: "static" },
        React.createElement(Container_1.default, { maxWidth: "xl" },
            React.createElement(Toolbar_1.default, { disableGutters: true, sx: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                } },
                React.createElement(InputSlider, { sliderValue: sliderValue, onSliderChange: onSliderChange }),
                React.createElement(Button_1.default, { variant: "contained", color: "success", onClick: onClickSort }, "SORT"),
                React.createElement(SelectAlgorithm, { algorithm: algorithm, onAlgorithmChange: onAlgorithmChange })))));
}
exports.default = ResponsiveAppBar;
