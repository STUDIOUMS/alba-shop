import CustomBtn from "@/ui/CustomBtn";
import { Stack } from "@mui/material";
import Link from "next/link";
import BasketModal from "./BasketModal";
import { useState } from "react";

const BasketButtons = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        <CustomBtn
          variant="outlined"
          color="secondary"
          onClick={() => setModal(true)}
          sx={{ mr: 4 }}
        >
          Очистить корзину
        </CustomBtn>
        <Link href="/checkout" passHref>
          <CustomBtn>Оформить заказ</CustomBtn>
        </Link>
      </Stack>

      <BasketModal close={() => setModal(false)} open={modal} />
    </>
  );
};

export default BasketButtons;
