import { useAppStore } from "@/store/useAppStore";
import { useOrderStore } from "@/store/useOrderStore";
import { Order, Product } from "@/types";
import CustomBtn from "@/ui/CustomBtn";

type AddCartProps = {
  el: Product;
  pack: string;
  img: string;
  price: string;
};

const AddCart = (props: AddCartProps): JSX.Element => {
  const { el, img, pack, price } = props;
  const { setOrder } = useOrderStore();
  const { setMessage } = useAppStore();

  const order: Omit<Order, "count"> = {
    id: String(el.id) + "-" + pack,
    title: el.title,
    slug: el.slug,
    art: el.art,
    price,
    total: price,
    img,
    pack,
  };

  const addCartHandler = () => {
    setOrder(order);
    setMessage(`Товар ${el.title} был добавлен в корзину`);
  };

  return (
    <CustomBtn color="primary" variant="outlined" onClick={addCartHandler}>
      В корзину
    </CustomBtn>
  );
};

export default AddCart;
