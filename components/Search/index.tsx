"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomInput from "@/ui/CustomInput";
import { Box, Stack } from "@mui/material";
import CustomBtn from "@/ui/CustomBtn";
// import search from "@/assets/search.svg";

const Search: React.FC = () => {
  const [val, setVal] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val.length > 0) {
      params.set("s", val);
      router.push("/search?" + params.toString());
      setVal("");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, ml: 6, mr: 6 }}>
      <form onSubmit={searchHandler}>
        <Stack direction="row">
          <CustomInput
            size="small"
            fullWidth
            placeholder="Поиск по сайту"
            onChange={(e) => setVal(e.target.value)}
            sx={{ mb: 0 }}
          />
          <CustomBtn type="submit" variant="outlined" sx={{ ml: 2 }}>
            Искать
          </CustomBtn>
        </Stack>
      </form>
    </Box>
  );
};

export default Search;
