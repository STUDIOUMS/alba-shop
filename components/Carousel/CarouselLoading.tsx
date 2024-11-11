import Section from "@/ui/Section";
import { createArray } from "@/utils/helpers";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import GoodSkelet from "../Good/GoodSkelet";

const CarouselLoading = (): JSX.Element => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const list = createArray(isMobile ? 1 : isTablet ? 2 : 4);
  return (
    <Section>
      <Grid2 container spacing={6}>
        {list.map((__, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <GoodSkelet />
          </Grid2>
        ))}
      </Grid2>
    </Section>
  );
};

export default CarouselLoading;
