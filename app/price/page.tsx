import { BreadCrumbsItem } from "@/types";
import BreadCrumbs from "@/ui/BreadCrumbs";
import Section from "@/ui/Section";
import { Typography } from "@mui/material";

// Metatags
export const metadata = {
  title: "Прайс",
  description: "Прайс",
};

// Breadscrumbs
const crumbs: BreadCrumbsItem[] = [{ name: "Прайс", slug: "price" }];

export default function Page() {
  return (
    <Section>
      <BreadCrumbs links={crumbs} />
      <Typography variant="h1">Прайс</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
        voluptatum enim. Cum repellat consectetur non ratione culpa aperiam at,
        necessitatibus nobis ullam. Eligendi tempore facere cumque non, eum eos
        veritatis commodi nulla culpa sunt, laboriosam blanditiis neque
        perspiciatis! Sequi vel officiis minima aut optio dolores culpa nobis
        esse adipisci vero totam minus ea praesentium, enim repellendus
        perspiciatis. Explicabo temporibus tempora consectetur nemo dolores
        aperiam ipsam deserunt accusamus incidunt, nostrum a, repellat dicta
        distinctio totam perspiciatis assumenda illo. Nihil facilis laudantium
        quia maiores consequuntur obcaecati est. Iure beatae, voluptas nobis
        debitis sed expedita minus facilis. Aliquid nulla tempore molestiae
        distinctio?
      </Typography>
    </Section>
  );
}
