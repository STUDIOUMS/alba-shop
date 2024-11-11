"use client";

import useGetData from "@/hooks/useGetData";
import { BlogItem, Response } from "@/types";
import { Grid2 } from "@mui/material";
import ErrorAlert from "../ErrorAlert";
import BlogsWidjetItem from "./BlogsWidjetItem";
import Loading from "./Loading";

const BlogsWidjet = (): JSX.Element => {
  const { data, isLoading, isSuccess, isError } = useGetData<
    Response<BlogItem>
  >({
    key: ["blog"],
    uri: "/blog/articles?limit=2",
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorAlert />;

  return (
    <Grid2 container spacing={6}>
      {isSuccess &&
        data.results.map((blog) => (
          <BlogsWidjetItem key={blog.id} item={blog} />
        ))}
    </Grid2>
  );
};

export default BlogsWidjet;
