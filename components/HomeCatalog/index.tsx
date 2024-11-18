"use client";

import useGetData from "@/hooks/useGetData";
import { Grid2, styled, Typography } from "@mui/material";
import { Category, Response } from "@/types";
import Section from "@/ui/Section";
import Link from "next/link";
import HomeCatalogLoading from "./HomeCatalogLoading";
import ErrorAlert from "../ErrorAlert";

const ItemCat = styled(Grid2)(({ theme }) => ({
  a: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderColor: theme.palette.grey[300],
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    color: theme.palette.common.black,
    display: "block",
    minHeight: 220,
    padding: theme.spacing(6),
    position: "relative",
    textDecoration: "none",
  },
}));

const HomeCatalog = (): JSX.Element => {
  const { data, isLoading, isSuccess, isError } = useGetData<
    Response<Category>
  >({
    key: ["catalog"],
    uri: "/catalog/categories",
  });

  if (isLoading) return <HomeCatalogLoading />;
  if (isError)
    return (
      <Section>
        <ErrorAlert />
      </Section>
    );

  return (
    <Section title="Категории">
      <Grid2 container spacing={4}>
        {isSuccess &&
          data.results.map((cat) => (
            <ItemCat key={cat.id} size={{ xs: 12, md: 4 }}>
              <Link
                href={`/cat/${cat.slug}`}
                style={{ backgroundImage: `url(${cat.img})` }}
              >
                <Typography variant="h2" component="span">
                  {cat.name}
                </Typography>
              </Link>
            </ItemCat>
          ))}
      </Grid2>
    </Section>
  );
};

export default HomeCatalog;
