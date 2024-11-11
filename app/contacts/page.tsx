import BreadCrumbs from "@/ui/BreadCrumbs";
import { BreadCrumbsItem } from "@/types";
import Section from "@/ui/Section";
import { Grid2, Typography } from "@mui/material";
import MapFrame from "./MapFrame";

// Metatags
export const metadata = {
  title: "Контакты",
  description: "Контакты",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Контакты", slug: "contacts" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Контакты</Typography>

      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Typography variant="h3">Телефоны</Typography>
          <p>
            <a href="tel:83452388366">8 (3452) 388-366</a> - городской
            <br />
            <a href="tel:89199508366">8 (919)-950-8366</a>
            <br />
            <a href="tel:89199508366">8 (919)-950-8366</a>
          </p>

          <Typography variant="h3">E-mail</Typography>
          <p>
            <a href="mailto:alba72-22@yandex.ru">alba72-22@yandex.ru</a>
          </p>

          <Typography variant="h3">Группа VK</Typography>
          <p>
            <a href="https://vk.com/alba_higo" target="_blank">
              https://vk.com/alba_higo
            </a>
          </p>
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Typography variant="h3">Карта</Typography>
          <MapFrame />
        </Grid2>
      </Grid2>
    </Section>
  );
}
