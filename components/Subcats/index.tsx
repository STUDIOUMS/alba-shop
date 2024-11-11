"use client";

import { Grid2 } from "@mui/material";
import { Cat, Response } from "@/types";
import useGetData from "@/hooks/useGetData";
import SubcatItem from "./SubcatItem";
import SubcatLoading from "./SubcatLoading";

type SubcatsProps = {
  cat: Cat;
};

const Subcats = (props: SubcatsProps): JSX.Element => {
  const { cat } = props;

  const { data, isSuccess, isLoading } = useGetData<Response<Cat>>({
    key: ["category"],
    uri: `/catalog/categories?parent=${cat.id}`,
  });

  if (cat.parent) return <></>;
  if (isLoading) return <SubcatLoading />;

  return (
    <Grid2 container spacing={4} sx={{ mb: 6 }}>
      {isSuccess &&
        data.results.map((subcat) => (
          <SubcatItem key={subcat.id} subcat={subcat} />
        ))}
    </Grid2>
  );
};

export default Subcats;
