"use client";

import ErrorAlert from "@/components/ErrorAlert";
import Filter from "@/components/Filter";
import GoodList from "@/components/GoodList";
import Sort from "@/components/Sort";
import { PRODUCTS_LIMIT } from "@/constants";
import useGetData from "@/hooks/useGetData";
import { Category, Pack, Product, Response } from "@/types";
import { Grid2 } from "@mui/material";
import { useSearchParams } from "next/navigation";
import CatLoading from "./CatLoading";

type CatGridProps = {
  cat: Category;
};

const CatGrid = (props: CatGridProps): JSX.Element => {
  const { cat } = props;
  const queryParams = useSearchParams();
  const queryParamsString = queryParams.toString().length
    ? `&${queryParams.toString()}`
    : "";

  const { data, isLoading, isError, isSuccess } = useGetData<Response<Product>>(
    {
      key: ["products", queryParamsString],
      uri: `/catalog/products?categories=${cat.id}&limit=${PRODUCTS_LIMIT}${queryParamsString}`,
    }
  );

  const { data: dataPacks, isSuccess: succesPacks } = useGetData<
    Response<Pack>
  >({
    key: ["packs"],
    uri: `/catalog/packs`,
  });

  if (isLoading) return <CatLoading />;
  if (isError) return <ErrorAlert />;

  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 3 }}>
        {succesPacks && <Filter packs={dataPacks.results} />}
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 9 }}>
        <Sort />
        {isSuccess && <GoodList products={data.results} />}
      </Grid2>
    </Grid2>
  );
};

export default CatGrid;
