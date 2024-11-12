"use client";

import { Grid2, Grid2Props, styled, Typography } from "@mui/material";
import { BlogItem } from "@/types";
import { createDate } from "@/utils/helpers";
import Link from "next/link";

type BlogsWidjetItemProps = Grid2Props & {
  item: BlogItem;
};
const Item = styled(Grid2)(({ theme }) => ({
  borderColor: theme.palette.grey[300],
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 6,
  padding: theme.spacing(5),
}));

const BlogsWidjetItem = (props: BlogsWidjetItemProps): JSX.Element => {
  const { item } = props;
  return (
    <Item {...props}>
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
