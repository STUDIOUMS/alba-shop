import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";
import BlogList from "./components/BlogList";

// Metatags
export const metadata = {
  title: "Блог",
  description: "Блог",
};

// Breadcrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Блог", slug: "blog" }];

export default async function Blog() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Блог</Typography>
      <BlogList />
    </Section>
  );
}
