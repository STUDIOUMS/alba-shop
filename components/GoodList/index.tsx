import { Product } from "@/types";
import { Alert, AlertTitle, Grid2 } from "@mui/material";
import Good from "../Good";

type GoodListProps = {
  products: Product[];
};

const GoodList = (props: GoodListProps): JSX.Element => {
  const { products } = props;

  return (
    <>
      {products.length ? (
        <Grid2 container spacing={4} sx={{ mb: 10 }}>
          {products.map((product) => (
            <Good key={product.id} el={product} />
          ))}
        </Grid2>
      ) : (
        <Alert severity="info" variant="outlined">
          <AlertTitle>Не найдено</AlertTitle>В данной категории нет товаров по
          данным критериям
        </Alert>
      )}
    </>
  );
};

export default GoodList;
