"use client";

import { Box, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box>
      <Box sx={{ mb: 8 }}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width={70} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Box>
      <Box sx={{ mb: 8 }}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width={70} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Box>
      <Box sx={{ mb: 8 }}>
        <Skeleton variant="text" height={40} />
        <Skeleton variant="text" height={20} width={70} sx={{ mb: 2 }} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="text" height={20} width="80%" />
      </Box>
    </Box>
  );
}
