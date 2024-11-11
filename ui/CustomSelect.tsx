"use client";

import { MenuItem, TextFieldProps } from "@mui/material";
import CustomInput from "./CustomInput";

export type SelectItem = {
  value: string;
  label: string;
};

type CustomSelectProps = TextFieldProps & {
  list: SelectItem[];
  value?: string;
};

const CustomSelect = (props: CustomSelectProps): JSX.Element => {
  const { list, value } = props;
  return (
    <CustomInput {...props} select defaultValue={value ? value : list[0].value}>
      {list.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </CustomInput>
  );
};

export default CustomSelect;
