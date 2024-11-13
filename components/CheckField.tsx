import { FormControlLabel, FormControlLabelProps, styled } from "@mui/material";

const Item = styled(FormControlLabel)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  padding: 0,
}));

const CheckField = (props: FormControlLabelProps) => {
  return <Item {...props} />;
};

export default CheckField;
