"use client";

import { Grid2, styled, Typography } from "@mui/material";
import { BlogItem } from "@/types";
import { createDate } from "@/utils/helpers";
import Link from "next/link";

type BlogsWidjetItemProps = {
  item: BlogItem;
};
const Item = styled(Grid2)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: "6px",
  padding: theme.spacing(5),
}));

const BlogsWidjetItem = (props: BlogsWidjetItemProps): JSX.Element => {
  const { item } = props;
  return (
    <Item size={{ xs: 12, lg: 6 }}>
      <Typography variant="h4" component="div" sx={{ mb: 2 }}>
        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
      </Typography>
      <Typography
        variant="body2"
        component="div"
        color="textSecondary"
        sx={{ mb: 4 }}
      >
        {createDate(item.createdAt)}
      </Typography>
      <Typography variant="body1" component="div">
        {item.short}
      </Typography>
    </Item>
  );
};

export default BlogsWidjetItem;
