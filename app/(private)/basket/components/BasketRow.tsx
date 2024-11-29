"use client";

import PriceBox from "@/components/PriceBox";
import { useOrderStore } from "@/store/useOrderStore";
import { Order } from "@/types";
import { QuantityInput } from "@/ui/QuantityInput";
import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

type BasketRowProps = {
  order: Order;
};

const BasketRow = (props: BasketRowProps): JSX.Element => {
  const { order } = props;
  const { deleteOrder, changeCount } = useOrderStore();
  const total = order.count * order.price;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableRow sx={{ position: "relative" }}>
      <TableCell component="th" scope="row">
        <Link href={`/product/${order.slug}`}>
          <img
            src={order.img}
            alt=""
            style={{ display: "block", width: isMobile ? 50 : 70 }}
          />
        </Link>
        <IconButton
          color="error"
          sx={{
            position: "absolute",
            right: 0,
            top: isMobile ? 4 : "50%",
            mt: isMobile ? 0 : "-24px",
          }}
          onClick={() => deleteOrder(order.id)}
        >
          &times;
        </IconButton>
      </TableCell>
      <TableCell>
        <Typography variant="h4">
          <Link href={`/product/${order.slug}`}>{order.title}</Link>
        </Typography>
        <Typography variant="body2">
          Фасовка: <b>{order.pack}</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: isMobile ? 4 : 0 }}>
          Код товара: <b>{order.art}</b>
        </Typography>
        {isMobile && (
          <>
            <PriceBox price={order.price} />
            <Box display="flex" sx={{ mt: 4, mb: 4 }}>
              <QuantityInput
                onChange={(e, value) => changeCount(order.id, String(value))}
                defaultValue={order.count}
              />
            </Box>
            <PriceBox price={total} />
          </>
        )}
      </TableCell>
      {!isMobile && (
        <>
          <TableCell>
            <PriceBox price={order.price} />
          </TableCell>
          <TableCell>
            <QuantityInput
              onChange={(e, value) => changeCount(order.id, String(value))}
              defaultValue={order.count}
            />
          </TableCell>
          <TableCell>
            <PriceBox price={total} />
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default BasketRow;
