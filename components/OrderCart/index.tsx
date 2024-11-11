import { Box, styled } from "@mui/material";
import { CURRENCY } from "@/constants";
import { Delivery, Order } from "@/types";
import OrderCartItem, { Item } from "./OrderCartItem";

type OrderCartProps = {
  delivery: Delivery;
  deliveryPrice: number;
  orders: Order[];
  totalPrice: number;
};

const OrderCartWrap = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  padding: theme.spacing(5),
  position: "sticky",
  top: "85px",
}));

const OrderCart = (props: OrderCartProps): JSX.Element => {
  const { delivery, deliveryPrice, orders, totalPrice } = props;
  return (
    <OrderCartWrap>
      {orders.map((order) => (
        <OrderCartItem key={order.id} order={order} />
      ))}
      <Item display="flex" justifyContent="space-between">
        Доставка:{" "}
        <span>
          <b>{deliveryPrice}</b> {CURRENCY}
        </span>
      </Item>
      <Item display="flex" justifyContent="space-between">
        Итого:{" "}
        <span>
          <b>{totalPrice}</b> {CURRENCY}
        </span>
      </Item>
    </OrderCartWrap>
  );
};

export default OrderCart;
