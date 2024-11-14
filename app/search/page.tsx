import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Alert, AlertTitle, Typography } from "@mui/material";
import SearchGrid from "./components/SearchGrid";

type Params = {
  searchParams: Promise<{ s: string }>;
};

// Metatags
export const metadata = {
  title: "Результаты поиска",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [
  { name: "Результаты поиска", slug: "search" },
];

async function SearchPage(props: Params) {
  const { s } = await props.searchParams;
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">
        Результаты поиска по запросу - &quot;{s}&quot;
      </Typography>
      <SearchGrid query={s} />
    </Section>
  );
}

export default SearchPage;
