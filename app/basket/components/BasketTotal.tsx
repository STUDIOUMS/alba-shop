import { TEXTS } from "@/texts";
import { Order } from "@/types";
import { getTotalPrice } from "@/utils/helpers";
import { Typography } from "@mui/material";

type BasketTotalProps = {
  orders: Order[];
};

const BasketTotal = (props: BasketTotalProps): JSX.Element => {
  const { orders } = props;
  const { totalPrice } = getTotalPrice(orders);

  return (
    <Typography variant="h2" fontWeight={400} textAlign="right" component="div">
      Итого: <b>{totalPrice}</b> <small>{TEXTS.common.currency}</small>
    </Typography>
  );
};

export default BasketTotal;
