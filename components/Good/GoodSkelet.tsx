import { Box, Skeleton } from "@mui/material";

const GoodSkelet = (): JSX.Element => {
  return (
    <Box>
      <Skeleton variant="rounded" height={140} sx={{ mb: 4 }} />
      <Skeleton variant="rounded" height={30} sx={{ mb: 4 }} />
      <Skeleton variant="rounded" height={16} width="80%" sx={{ mb: 2 }} />
      <Skeleton variant="rounded" height={16} width="80%" sx={{ mb: 2 }} />
      <Skeleton variant="rounded" height={16} width="50%" sx={{ mb: 4 }} />
      <Skeleton variant="rounded" height={40} />
    </Box>
  );
};

export default GoodSkelet;
