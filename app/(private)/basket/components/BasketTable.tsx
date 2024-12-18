import CartItem from "@/components/CartItem";
import CartHead from "@/components/CartItem/CartHead";
import { Order } from "@/types";

type BasketTableProps = {
  orders: Order[];
};

const BasketTable = ({ orders }: BasketTableProps): JSX.Element => {
  return (
    <>
      <CartHead />
      {orders.map((order) => (
        <CartItem key={order.id} order={order} />
      ))}
    </>
  );
};

export default BasketTable;
