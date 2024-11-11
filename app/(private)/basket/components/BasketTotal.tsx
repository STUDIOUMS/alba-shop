import { CURRENCY } from "@/constants";
import { Order } from "@/types";
import { Typography } from "@mui/material";

type BasketTotalProps = {
  orders: Order[];
};

const BasketTotal = (props: BasketTotalProps): JSX.Element => {
  const { orders } = props;
  const total: number = orders.reduce(
    (acum, el) => (acum += Number(el.total)),
    0
  );
  return (
    <Typography variant="h2" fontWeight={400} textAlign="right">
      Итого: <b>{total}</b> <small>{CURRENCY}</small>
    </Typography>
  );
};

export default BasketTotal;
