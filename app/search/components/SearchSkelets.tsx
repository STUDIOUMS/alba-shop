import GoodSkelet from "@/components/Good/GoodSkelet";
import { createArray } from "@/utils/helpers";
import { Grid2 } from "@mui/material";

const SearchSkelets = (): JSX.Element => {
  const list = createArray(4);
  return (
    <Grid2 container spacing={6}>
      {list.map((__, index) => (
        <Grid2 key={index} size={{ xs: 1, sm: 3 }}>
          <GoodSkelet />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SearchSkelets;
