import { CURRENCY } from "@/constants";
import { Order } from "@/types";
import { getTotalPrice } from "@/utils/helpers";
import { Typography } from "@mui/material";

type BasketTotalProps = {
  orders: Order[];
};

const BasketTotal = (props: BasketTotalProps): JSX.Element => {
  const { orders } = props;
  const totalPrice: number = getTotalPrice(orders);

  return (
    <Typography variant="h2" fontWeight={400} textAlign="right">
      Итого: <b>{totalPrice}</b> <small>{CURRENCY}</small>
    </Typography>
  );
};

export default BasketTotal;
