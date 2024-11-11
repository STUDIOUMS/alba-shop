import { CURRENCY } from "@/constants";
import { Stack, StackProps, Typography } from "@mui/material";

type PriceSizeType = "large" | "small";

type PriceBoxProps = StackProps & {
  price: string;
  oldprice?: string;
  size?: PriceSizeType;
};

const PriceBox = (props: PriceBoxProps): JSX.Element => {
  const { price, oldprice, size = "small" } = props;
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Typography
        variant="h4"
        component="span"
        sx={{ mb: 0, mr: 1 }}
        fontWeight={700}
      >
        {price}
      </Typography>
      <Typography variant="body2" component="span">
        {CURRENCY}
      </Typography>
      {oldprice && (
        <Stack
          direction="row"
          alignItems="center"
          sx={(theme) => ({
            color: theme.palette.error.main,
            ml: 2,
            textDecoration: "line-through",
          })}
        >
          <Typography
            variant="h4"
            component="span"
            color="error"
            fontWeight={700}
            sx={{ mb: 0, mr: 1 }}
          >
            {oldprice}
          </Typography>
          <Typography variant="body2" color="error" component="span">
            {CURRENCY}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default PriceBox;
