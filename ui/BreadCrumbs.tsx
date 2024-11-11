"use client";

import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import { BreadCrumbsItem } from "@/types";

type BreadCrumbsProps = {
  links: BreadCrumbsItem[];
};

const BreadCrumbs = (props: BreadCrumbsProps): JSX.Element => {
  const { links } = props;

  return (
    <Breadcrumbs
      separator="›"
      aria-label="breadcrumb"
      sx={(theme) => ({ mb: 6, fontSize: theme.typography.body2.fontSize })}
    >
      <Link href="/">Главная</Link>
      {links.map((link, index, arr) => {
        if (index !== arr.indexOf(arr[arr.length - 1])) {
          return (
            <Link key={link.slug} href={link.slug}>
              {link.name}
            </Link>
          );
        }
      })}
      <Typography variant="body2" component="span">
        {links[links.length - 1].name}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
