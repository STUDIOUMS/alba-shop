import { Typography } from "@mui/material";
import { BreadCrumbsItem } from "@/types";
import Section from "@/ui/Section";
import BreadCrumbs from "@/ui/BreadCrumbs";

// Metatags
export const metadata = {
  title: "Вакансии",
  description: "Вакансии",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Вакансии", slug: "vacancies" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Вакансии</Typography>
      <Typography variant="body1">Вакансии</Typography>
    </Section>
  );
}
