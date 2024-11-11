import { Grid2, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 6 }}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width={70} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 6 }}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width={70} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Grid2>
    </Grid2>
  );
};

export default Loading;
