import Section from "@/ui/Section";
import { createArray } from "@/utils/helpers";
import { Grid2, Skeleton } from "@mui/material";

const HomeCatalogLoading = (): JSX.Element => {
  const list = createArray(6);
  return (
    <Section title="Категории">
      <Grid2 container spacing={4}>
        {list.map((__, index) => (
          <Grid2 key={index} size={{ xs: 12, md: 4 }}>
            <Skeleton variant="rounded" height={220} />
          </Grid2>
        ))}
      </Grid2>
    </Section>
  );
};

export default HomeCatalogLoading;
