import {
  TableCell,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const BasketHead = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) return <></>;

  return (
    <TableHead>
      <TableRow>
        <TableCell>Изображение</TableCell>
        <TableCell>Название товара</TableCell>
        <TableCell>Цена</TableCell>
        <TableCell>Кол-во</TableCell>
        <TableCell>Стоимость</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BasketHead;
