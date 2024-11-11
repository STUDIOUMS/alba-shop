"use client";

import PriceBox from "@/components/PriceBox";
import { useOrderStore } from "@/store/useOrderStore";
import { Order } from "@/types";
import CountBox from "@/ui/CountBox";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import Link from "next/link";

type BasketRowProps = {
  order: Order;
};

const BasketRow = (props: BasketRowProps): JSX.Element => {
  const { order } = props;
  const { deleteOrder, changeCount } = useOrderStore();

  return (
    <TableRow sx={{ position: "relative" }}>
      <TableCell component="th" scope="row">
        <Link href={`/product/${order.slug}`}>
          <img src={order.img} alt="" style={{ display: "block", width: 70 }} />
        </Link>
      </TableCell>
      <TableCell>
        <Typography variant="h4">
          <Link href={`/product/${order.slug}`}>{order.title}</Link>
        </Typography>
        <Typography variant="body2">
          Фасовка: <b>{order.pack}</b>
        </Typography>
        <Typography variant="body2">
          Код товара: <b>{order.art}</b>
        </Typography>
      </TableCell>
      <TableCell>
        <PriceBox price={order.price} />
      </TableCell>
      <TableCell>
        <CountBox
          defaultValue={order.count}
          onChange={(e) => changeCount(order.id, e.target.value)}
        />
      </TableCell>
      <TableCell>
        <PriceBox price={order.total} />
        <IconButton
          color="error"
          sx={{ position: "absolute", right: 0, top: "50%", mt: "-24px" }}
          onClick={() => deleteOrder(order.id)}
        >
          &times;
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default BasketRow;
