import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiInput from "@mui/material/Input";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function SelectAlgorithm({ algorithm, onAlgorithmChange }) {
  const algorithms: Array<string> = ["Bubble Sort", "Quick Sort"];
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

function InputSlider({ sliderValue, onSliderChange }) {
  const handleBlur = () => {
    if (sliderValue < 0) {
      onSliderChange(0);
    } else if (sliderValue > 100) {
      onSliderChange(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Number of rectangles & speed
      </Typography>
      <Slider
        value={typeof sliderValue === "number" ? sliderValue : 0}
        onChange={(event, newValue) => onSliderChange(newValue)}
        aria-labelledby="input-slider"
      />
    </Box>
  );
}

export default function ResponsiveAppBar({
  onSliderChange,
  sliderValue,
  onAlgorithmChange,
  algorithm,
}) {
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
          <Button color="success">SORT</Button>
          <SelectAlgorithm
            algorithm={algorithm}
            onAlgorithmChange={onAlgorithmChange}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
