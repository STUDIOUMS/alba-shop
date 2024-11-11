"use client";

import { styled, TextField, TextFieldProps } from "@mui/material";

const InputField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginBottom: theme.spacing(6),
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[400],
    borderWidth: "1px !important",
    borderRadius: "6px",
  },
  "& .MuiInputBase-root:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.grey[500],
    },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.common.black,
  },
  "& .MuiFormHelperText-root": {
    fontSize: theme.typography.body2.fontSize,
  },
  "& .MuiSelect-outlined.MuiOutlinedInput-input": {
    paddingRight: "40px !important",
  },
}));

const CustomInput = (props: TextFieldProps): JSX.Element => {
  return <InputField {...props} />;
};

export default CustomInput;
