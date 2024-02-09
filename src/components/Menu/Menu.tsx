import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface SelectAlgorithmProps {
  algorithm: string;
  onAlgorithmChange: (arg0: string) => void;
}

interface InputSliderProps {
  sliderValue: number;
  onSliderChange: (value: number) => void;
}

function SelectAlgorithm({
  algorithm,
  onAlgorithmChange,
}: SelectAlgorithmProps) {
  const algorithms: Array<string> = [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
  ];
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Algorithm</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={typeof algorithm === "string" ? algorithm : ""}
          label="Algorithm"
          onChange={(event) => onAlgorithmChange(event.target.value as string)}
        >
          {algorithms.map((algorithm) => {
            return (
              <MenuItem key={algorithm} value={algorithm}>
                {algorithm}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

function InputSlider({ sliderValue, onSliderChange }: InputSliderProps) {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Number of rectangles & speed
      </Typography>
      <Slider
        value={typeof sliderValue === "number" ? sliderValue : 0}
        onChange={(_event: Event, newValue: number) => onSliderChange(newValue)}
        aria-labelledby="input-slider"
      />
    </Box>
  );
}

interface ResponsiveAppBarProps {
  algorithm: string;
  sliderValue: number;
  onAlgorithmChange: (value: string) => void;
  onSliderChange: (value: number) => void;
  onClickSort: () => void;
}

export default function ResponsiveAppBar({
  algorithm,
  sliderValue,
  onAlgorithmChange,
  onSliderChange,
  onClickSort,
}: ResponsiveAppBarProps) {
  return (
    <AppBar
      style={{
        background: "#2E3B55",
        display: "flex",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <InputSlider
            sliderValue={sliderValue}
            onSliderChange={onSliderChange}
          />
          <Button variant="contained" color="success" onClick={onClickSort}>
            SORT
          </Button>
          <SelectAlgorithm
            algorithm={algorithm}
            onAlgorithmChange={onAlgorithmChange}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
