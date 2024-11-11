"use client";

import { CURRENCY } from "@/constants";
import { Box, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";

type RangeProps = {
  max?: number;
  values?: number[];
};

const MIN_DISTANCE = 10;

const Range = (props: RangeProps): JSX.Element => {
  const { values = [500, 2000], max = 3000 } = props;
  const [value, setValue] = useState<number[]>(values);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - MIN_DISTANCE), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + MIN_DISTANCE)]);
    }
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">
          {value[0]} {CURRENCY}
        </Typography>
        <Typography variant="h5">
          {value[1]} {CURRENCY}
        </Typography>
      </Stack>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        max={max}
      />
    </Box>
  );
};

export default Range;
