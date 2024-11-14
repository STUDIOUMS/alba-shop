import { Product } from "@/types";
import { Grid2 } from "@mui/material";
import Good from "../Good";

type GoodListProps = {
  products: Product[];
};

const GoodList = (props: GoodListProps): JSX.Element => {
  const { products } = props;

  return (
    <Grid2 container spacing={4} sx={{ mb: 10 }}>
      {products.map((product) => (
        <Good key={product.id} el={product} />
      ))}
    </Grid2>
  );
};

export default GoodList;
