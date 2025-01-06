import Link from "next/link";
import CustomBtn from "@/ui/CustomBtn";
import { CircularProgress, Stack } from "@mui/material";
import { Payment } from "./types";

type OrderFormButtonsProps = {
  isPending: boolean;
  payment: Payment;
};

const OrderFormButtons = (props: OrderFormButtonsProps) => {
  const { isPending, payment } = props;
  return (
    <Stack direction="row" justifyContent="space-between">
      <Link href="/basket" passHref>
        <CustomBtn variant="outlined" color="secondary">
          Вернуться в корзину
        </CustomBtn>
      </Link>
      <CustomBtn type="submit">
        {payment === "online" ? "Оплатить заказ" : "Оформить заказ"}{" "}
        {isPending && (
          <CircularProgress
            size={20}
            color="secondary"
            sx={{ ml: 3 }}
            aria-label="Loading"
          />
        )}
      </CustomBtn>
    </Stack>
  );
};

export default OrderFormButtons;
