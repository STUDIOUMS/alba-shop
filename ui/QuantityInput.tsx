"use client";

import React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/material";

const StyledInputRoot = styled("div")(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.grey[100],
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledInput = styled("input")(({ theme }) => ({
  color: theme.palette.common.black,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: 6,
  boxSizing: "border-box",
  margin: "0 2px",
  padding: theme.spacing(1),
  fontSize: 14,
  height: 38,
  outline: 0,
  minWidth: 0,
  width: 50,
  textAlign: "center",
  "&:focus": {
    borderColor: theme.palette.grey[500],
  },
}));

const StyledButton = styled("button")(({ theme }) => ({
  border: "1px solid",
  borderRadius: 6,
  borderColor: theme.palette.grey[300],
  color: theme.palette.common.black,
  cursor: "pointer",
  fontSize: 18,
  height: 38,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  "&.increment": {
    order: 1,
  },
}));

const NumberInput = (props: NumberInputProps) => {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <span>+</span>,
          className: "increment",
        },
        decrementButton: {
          children: <span>-</span>,
        },
      }}
      {...props}
    />
  );
};

export const QuantityInput = (props: NumberInputProps): JSX.Element => {
  return (
    <NumberInput aria-label="Количество" min={1} defaultValue={1} {...props} />
  );
};
