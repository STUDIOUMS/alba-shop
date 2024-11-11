"use client";

import ErrorAlert from "@/components/ErrorAlert";
import { Alert, AlertTitle, Box } from "@mui/material";
import useGetData from "@/hooks/useGetData";
import { BlogItem, Response } from "@/types";
import Pager from "@/ui/Pager";
import BlogCard from "./BlogCard";
import Loading from "../[blog]/loading";

const BlogList = (): JSX.Element => {
  const { data, isLoading, isError, isSuccess } = useGetData<
    Response<BlogItem>
  >({
    key: ["blog"],
    uri: "/blog/articles?ordering=-id",
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorAlert />;

  return (
    <Box>
      {isSuccess && (
        <>
          <Box sx={{ mb: 10 }}>
            {data.results.map((el) => (
              <BlogCard key={el.id} item={el} />
            ))}
          </Box>
          <Pager count={10} size="large" />
        </>
      )}

      {isSuccess && !data.results.length && (
        <Alert variant="outlined" severity="info">
          <AlertTitle>Нет статей</AlertTitle> В блоге пока что нет ни одной
          статьи.
        </Alert>
      )}
    </Box>
  );
};

export default BlogList;
