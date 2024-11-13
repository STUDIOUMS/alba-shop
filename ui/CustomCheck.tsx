import { Checkbox, CheckboxProps } from "@mui/material";

const CustomCheck = (props: CheckboxProps) => {
  return <Checkbox size="small" {...props} sx={{ p: 0, pl: 2, mr: 2 }} />;
};

export default CustomCheck;
