import { Order } from "@/types";
import { CartBox, CartBoxDetails, CartBoxImg, CartBoxInfo } from "./styles";
import nofoto from "@/assets/no-photo.svg";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import PriceBox from "../PriceBox";
import { QuantityInput } from "@/ui/QuantityInput";
import { useOrderStore } from "@/store/useOrderStore";
import Image from "next/image";

type CartItemProps = {
  order: Order;
};

export const IMG_WIDTH = 150;
export const IMG_WIDTH_MOBILE = 80;

const CartItem = (props: CartItemProps): JSX.Element => {
  const { order } = props;
  const { deleteOrder, changeCount } = useOrderStore();
  const total = order.count * order.price;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CartBox>
      <CartBoxImg>
        <Image
          src={order.img ? order.img : nofoto.src}
          alt=""
          width={isMobile ? IMG_WIDTH_MOBILE : IMG_WIDTH}
          height={isMobile ? IMG_WIDTH_MOBILE : IMG_WIDTH}
          style={{ objectFit: "contain" }}
        />
      </CartBoxImg>
      <CartBoxDetails>
        <CartBoxInfo>
          <Typography variant="h3" component="div" sx={{ mb: 4 }}>
            <Link href={`/product/${order.slug}`}>{order.title}</Link>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Фасовка: <b>{order.pack}</b>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Код товара: <b>{order.art}</b>
          </Typography>
        </CartBoxInfo>
        <PriceBox price={order.price} className="textCenter" />
        <QuantityInput
          onChange={(e, value) => changeCount(order.id, String(value))}
          defaultValue={order.count}
          className="textLeft"
        />
        <PriceBox price={total} className="textCenter" />
      </CartBoxDetails>
      <IconButton
        color="error"
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
        }}
        onClick={() => deleteOrder(order.id)}
      >
        &times;
      </IconButton>
    </CartBox>
  );
};

export default CartItem;
