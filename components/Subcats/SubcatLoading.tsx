import { Grid2, Skeleton } from "@mui/material";

const SubcatLoading = (): JSX.Element => {
  return (
    <Grid2 container spacing={4} sx={{ mb: 6 }}>
      {Array.from(new Array(4)).map((_, index) => (
        <Grid2 key={index} size={{ xs: 4, lg: 3 }}>
          <Skeleton variant="rounded" height={100} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SubcatLoading;
