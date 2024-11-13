"use client";

import { CURRENCY } from "@/constants";
import { Box, Slider, Stack, Typography } from "@mui/material";
import { SetStateAction } from "react";

type RangeProps = {
  max: number;
  values: number[];
  setValues: React.Dispatch<SetStateAction<number[]>>;
};

const MIN_DISTANCE = 100;

const Range = (props: RangeProps): JSX.Element => {
  const { values, max, setValues } = props;

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValues([Math.min(newValue[0], values[1] - MIN_DISTANCE), values[1]]);
    } else {
      setValues([values[0], Math.max(newValue[1], values[0] + MIN_DISTANCE)]);
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">
          {values[0]} {CURRENCY}
        </Typography>
        <Typography variant="h5">
          {values[1]} {CURRENCY}
        </Typography>
      </Stack>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        max={max}
      />
    </Box>
  );
};

export default Range;
