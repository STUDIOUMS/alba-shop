"use client";

import { createArray } from "@/utils/helpers";
import { Grid2, Skeleton } from "@mui/material";

const CatMainLoading = (): JSX.Element => {
  const list = createArray(8);
  return (
    <Grid2 container spacing={6}>
      {list.map((__, index) => (
        <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <Skeleton variant="rounded" height={140} sx={{ mb: 4 }} />
          <Skeleton variant="rounded" height={15} width="80%" sx={{ mb: 2 }} />
          <Skeleton variant="rounded" height={15} width="55%" />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CatMainLoading;
