import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Alert, AlertTitle, Typography } from "@mui/material";

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

      <Alert variant="outlined" severity="info">
        <AlertTitle>
          По вашему запросу <b>&quot;{s}&quot;</b> ничего не найдено.
        </AlertTitle>
        Попробуйте изменить поисковый запрос.
      </Alert>
    </Section>
  );
}

export default SearchPage;
