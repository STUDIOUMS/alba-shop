import theme from "@/theme";
import { Checkbox, FormControlLabel, styled } from "@mui/material";

type CheckFieldProps = {
  checked: boolean;
  label: string;
  value: string;
  handler: (val: string) => void;
};

const Item = styled(FormControlLabel)(() => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  padding: 0,
}));

const CheckField = (props: CheckFieldProps) => {
  const { checked, handler, label, value } = props;
  return (
    <Item
      control={
        <Checkbox
          value={value}
          size="small"
          sx={{ p: 0, pl: 2, mr: 2 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handler(e.target.value)
          }
          defaultChecked={checked}
        />
      }
      label={label}
    />
  );
};

export default CheckField;
