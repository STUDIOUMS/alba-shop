"use client";

import useGetData from "@/hooks/useGetData";
import { Category, Response } from "@/types";
import MainCat from "@/ui/MainCat";
import { Grid2 } from "@mui/material";
import CatMainLoading from "./CatMainLoading";

const CatMainGrid = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useGetData<Response<Category>>({
    key: ["catalog"],
    uri: "/catalog/categories",
  });

  if (isLoading) return <CatMainLoading />;

  return (
    <Grid2 container spacing={6}>
      {isSuccess &&
        data.results.map((cat) => (
          <Grid2 key={cat.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <MainCat category={cat} />
          </Grid2>
        ))}
    </Grid2>
  );
};

export default CatMainGrid;
