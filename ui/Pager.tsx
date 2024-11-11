import { Pagination, PaginationProps, Stack } from "@mui/material";

const Pager = (props: PaginationProps) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination {...props} />
    </Stack>
  );
};

export default Pager;
