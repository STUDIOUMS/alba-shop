import { TextFieldProps } from "@mui/material";
import CustomInput from "./CustomInput";

const CountBox = (props: TextFieldProps): JSX.Element => {
  return (
    <CustomInput
      type="number"
      size="small"
      sx={{
        m: 0,
        width: "100px",
      }}
      InputProps={{
        inputProps: {
          min: 1,
        },
      }}
      {...props}
    />
  );
};

export default CountBox;
