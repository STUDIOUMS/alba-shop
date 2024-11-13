"use client";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { SORT_ITEMS } from "./constants";
import View from "@/ui/View";
import CustomSelect from "@/ui/CustomSelect";
import useSort from "@/hooks/useSort";

const Sort = (): JSX.Element => {
  const { sortHandler, value } = useSort();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
      <CustomSelect
        list={SORT_ITEMS}
        size="small"
        sx={{ m: 0 }}
        onChange={(e) => sortHandler(e.target.value)}
        value={value ? value : SORT_ITEMS[0].value}
      />
      {isTablet && <View />}
    </Stack>
  );
};

export default Sort;
