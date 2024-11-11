import { createArray } from "@/utils/helpers";
import { Grid2, Skeleton } from "@mui/material";

const CatLoading = (): JSX.Element => {
  const list = createArray(6);
  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 3 }}>
        <Skeleton variant="rounded" height={500} />
      </Grid2>

      <Grid2 size={{ xs: 12, lg: 9 }}>
        <Skeleton variant="rounded" height={100} sx={{ mb: 6 }} />
        <Skeleton variant="rounded" height={40} sx={{ mb: 6 }} />

        <Grid2 container spacing={6} sx={{ mb: 10 }}>
          {list.map((__, index) => (
            <Grid2
              key={index}
              size={{
                xs: 12,
                sm: 4,
              }}
            >
              <Skeleton variant="rounded" height={180} />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default CatLoading;
