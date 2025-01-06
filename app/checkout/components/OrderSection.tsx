import { BoxProps, Typography } from "@mui/material";
import { OrderSectionDiv, OrderSectionHead, OrderSectionInner } from "./styles";

type OrderSectionProps = BoxProps & {
  children: React.ReactNode;
  title: string;
};

const OrderSection = (props: OrderSectionProps): JSX.Element => {
  const { children, title } = props;
  return (
    <OrderSectionDiv {...props}>
      <OrderSectionHead>
        <Typography variant="h4" sx={{ m: 0 }}>
          {title}
        </Typography>
      </OrderSectionHead>
      <OrderSectionInner>{children}</OrderSectionInner>
    </OrderSectionDiv>
  );
};

export default OrderSection;
