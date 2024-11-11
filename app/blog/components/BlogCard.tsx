"use client";

import { BlogItem } from "@/types";
import { createDate } from "@/utils/helpers";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

type BlogCardProps = {
  item: BlogItem;
  full?: boolean;
};

const BlogDiv = styled(Box)(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.grey[300],
  borderBottomStyle: "solid",
  padding: `${theme.spacing(10)} 0`,
  "&:first-of-type": {
    paddingTop: 0,
  },
  "&:last-of-type": {
    border: 0,
    paddingBottom: 0,
  },
  p: { margin: 0 },
}));

const BlogCard = (props: BlogCardProps): JSX.Element => {
  const { item, full } = props;
  return (
    <BlogDiv>
      <Typography variant={full ? "h1" : "h3"} sx={{ mb: 4 }}>
        {full ? (
          item.title
        ) : (
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        )}
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        component="div"
        sx={{ mb: 6 }}
      >
        {createDate(item.createdAt)}
      </Typography>

      {full ? (
        <Box dangerouslySetInnerHTML={{ __html: item.description }}></Box>
      ) : (
        <Box>{item.short}</Box>
      )}
    </BlogDiv>
  );
};

export default BlogCard;
