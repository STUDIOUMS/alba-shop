import { TableCell, TableHead, TableRow } from "@mui/material";

const BasketHead = (): JSX.Element => {
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
