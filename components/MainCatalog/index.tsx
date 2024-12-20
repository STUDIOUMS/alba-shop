"use client";

import useGetData from "@/hooks/useGetData";
import { Typography } from "@mui/material";
import { Category, Response } from "@/types";
import Section from "@/ui/Section";
import Link from "next/link";
import ErrorAlert from "../ErrorAlert";
import { ItemCat, ItemGrid } from "./styles";
import MainCatalogLoading from "./MainCatalogLoading";

export type MainCatalogType = "main" | "catalog";

type MainCatalogProps = {
  count?: number;
  title?: string;
  type?: MainCatalogType;
};

const MainCatalog = (props: MainCatalogProps): JSX.Element => {
  const { count, title, type = "main" } = props;
  const { data, isLoading, isSuccess, isError } = useGetData<
    Response<Category>
  >({
    key: ["catalog"],
    uri: `/catalog/categories${count ? `?limit=${count}` : ""}`,
  });

  if (isLoading) return <MainCatalogLoading type={type} />;
  if (isError)
    return (
      <Section>
        <ErrorAlert />
      </Section>
    );

  return (
    <Section title={title} sx={{ p: 0 }}>
      <ItemGrid type={type}>
        {isSuccess &&
          data.results.map((cat) => (
            <ItemCat key={cat.id} className="div">
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
      </ItemGrid>
    </Section>
  );
};

export default MainCatalog;
