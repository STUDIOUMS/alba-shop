import { useAppStore } from "@/store/useAppStore";
import { useOrderStore } from "@/store/useOrderStore";
import { Order, Product } from "@/types";
import CustomBtn from "@/ui/CustomBtn";
import { QuantityInput } from "@/ui/QuantityInput";
import { Stack } from "@mui/material";
import { useState } from "react";

type AddCartProps = {
  el: Product;
  pack: string;
  img: string;
  price: number;
  small?: boolean;
};

const AddCart = (props: AddCartProps): JSX.Element => {
  const { el, img, pack, price, small } = props;
  const { setOrder } = useOrderStore();
  const { setMessage, view } = useAppStore();
  const [count, setCount] = useState<number>(1);

  const order: Order = {
    id: String(el.id) + "-" + pack,
    title: el.title,
    slug: el.slug,
    art: el.art,
    price,
    count,
    img,
    pack,
  };

  const addCartHandler = () => {
    setOrder(order);
    setMessage(`Товар ${el.title} был добавлен в корзину`);
  };

  return (
    <Stack direction={view === "grid" ? "row" : "column"}>
      <QuantityInput onChange={(e, val) => setCount(Number(val))} />
      <CustomBtn
        color="primary"
        variant="outlined"
        onClick={addCartHandler}
        sx={{
          ml: view === "grid" ? 3 : 0,
          mt: view === "list" ? 3 : 0,
          flexGrow: 1,
          fontSize: small ? 14 : 16,
        }}
      >
        В корзину
      </CustomBtn>
    </Stack>
  );
};

export default AddCart;
