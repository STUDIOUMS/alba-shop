"use client";

import ErrorAlert from "@/components/ErrorAlert";
import GoodList from "@/components/GoodList";
import useGetData from "@/hooks/useGetData";
import { Product, Response } from "@/types";
import { Alert, AlertTitle } from "@mui/material";
import SearchSkelets from "./SearchSkelets";

type SearchGridProps = {
  query: string;
};

const SearchGrid = (props: SearchGridProps): JSX.Element => {
  const { query } = props;

  const { data, isError, isLoading, isSuccess } = useGetData<Response<Product>>(
    {
      key: ["search", query],
      uri: `/catalog/products?search=${query}`,
    }
  );

  if (isError) return <ErrorAlert />;
  if (isLoading) return <SearchSkelets />;
  if (isSuccess && !data.results.length)
    return (
      <Alert severity="info" variant="outlined">
        <AlertTitle>Не найдено</AlertTitle> По вашему запросу ничего не найдено.
        Попробуйте изменить запрос.
      </Alert>
    );

  return <>{isSuccess && <GoodList products={data.results} />}</>;
};

export default SearchGrid;
