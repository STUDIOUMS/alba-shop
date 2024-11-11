import { CURRENCY } from "@/constants";
import { Order } from "@/types";
import { Box, Stack, styled, Typography } from "@mui/material";

type OrderCartItemProps = {
  order: Order;
};

export const Item = styled(Box)(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.grey[300],
  borderBottomStyle: "dashed",
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
}));

const OrderCartItem = (props: OrderCartItemProps): JSX.Element => {
  const { order } = props;
  return (
    <Item>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        {order.title}
      </Typography>
      <Stack>
        <Typography variant="body2">
          Кол-во: <b>{order.count}</b> шт.
        </Typography>
        <Typography variant="body2">
          Стоимость: <b>{order.total}</b> {CURRENCY}
        </Typography>
      </Stack>
    </Item>
  );
};

export default OrderCartItem;
