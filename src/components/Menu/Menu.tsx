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
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

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
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel sx={{ color: "white" }}>Algorithm</InputLabel>
        <Select
          value={algorithm}
          onChange={(event) => onAlgorithmChange(event.target.value as string)}
          label="Algorithm"
          sx={{ color: "white" }}
        >
          {algorithms.map((algorithm) => (
            <MenuItem key={algorithm} value={algorithm}>
              {algorithm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

function InputSlider({ sliderValue, onSliderChange }: InputSliderProps) {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Number of rectangles :
      </Typography>
      <Slider
        value={typeof sliderValue === "number" ? sliderValue : 0}
        onChange={(_event: Event, newValue: number | number[]) =>
          onSliderChange(newValue as number)
        }
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
  isSorting: boolean;
  onClickShuffle: () => void;
  isSorted: boolean;
}

export default function ResponsiveAppBar({
  algorithm,
  sliderValue,
  onAlgorithmChange,
  onSliderChange,
  onClickSort,
  isSorting,
  onClickShuffle,
  isSorted,
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

          {isSorting ? (
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              SORTING
            </LoadingButton>
          ) : isSorted ? (
            <Button
              variant="contained"
              color="success"
              onClick={onClickShuffle}
            >
              SHUFFLE
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={onClickSort}>
              SORT
            </Button>
          )}
          <SelectAlgorithm
            algorithm={algorithm}
            onAlgorithmChange={onAlgorithmChange}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
