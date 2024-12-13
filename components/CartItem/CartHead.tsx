import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CartBox, CartBoxDetails, CartBoxImg, CartBoxInfo } from "./styles";

const CartHead = (): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  if (isTablet) return <></>;

  return (
    <CartBox
      sx={{
        border: 0,
        pt: 0,
        pb: 0,
        fontSize: theme.typography.body2.fontSize,
      }}
    >
      <CartBoxImg>Изображение</CartBoxImg>
      <CartBoxDetails>
        <CartBoxInfo>Информация о товаре</CartBoxInfo>
        <Box textAlign="center">Цена</Box>
        <Box textAlign="center">Кол-во</Box>
        <Box textAlign="center">Стоимость</Box>
      </CartBoxDetails>
    </CartBox>
  );
};

export default CartHead;
